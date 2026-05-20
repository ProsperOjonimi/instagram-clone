# Instagram Clone

A full-stack social media application replicating core Instagram functionality — built with React 19, TypeScript, Tailwind CSS, and Supabase. Features include user authentication, a dynamic post feed with image uploads, like/unlike interactions, real-time comments, a multi-step post creation flow, and internationalization.

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Frontend | React 19 + TypeScript | Type safety, modern concurrent features |
| Build | Vite 7 | Near-instant HMR, optimized production builds |
| Styling | Tailwind CSS 3 + tailwind-merge | Utility-first, dark theme, no CSS conflicts |
| Backend / Database | Supabase (PostgreSQL, Auth, Storage) | Managed BaaS — real-time capable, row-level security, built-in auth |
| Server State | TanStack React Query 5 | Automatic caching, background refetching, optimistic updates |
| Forms | React Hook Form + Zod | Performant forms with schema-based validation |
| Routing | React Router DOM v7 | Nested layouts, protected routes |
| Notifications | react-hot-toast | Non-blocking user feedback |
| i18n | Custom context-based | English, French, Spanish localization |

## Features

### Authentication
- Sign up with email confirmation flow
- Login/logout with session persistence
- Password reset via email link
- New password creation with strength validation
- Protected routing — unauthenticated users are redirected to login

### Feed & Posts
- Infinite-style post feed ordered by creation date
- Image upload to Supabase Storage with preview
- Two-step post creation modal: file selection followed by caption
- Truncated captions with "more" toggle
- Relative timestamps (e.g., "5m", "3h", "2d")

### Social Interactions
- Like/unlike with optimistic UI updates
- Live like count reflects server state
- Comment system with optimistic insert
- Comments modal with user avatars and timestamps

### Stories
- Mock stories bar with gradient-ring avatars
- Realistic data structure ready for backend integration

### Internationalization
- English, French, and Spanish support for all auth flows
- Locale-aware error messages and form labels
- Language persisted via React context

### UI/UX
- Full dark theme matching Instagram's aesthetic
- Responsive layout — mobile top bar, desktop expandable sidebar
- Animated sidebar with hover-expand on desktop
- SVG icons matching Instagram's design system

## Architecture

```
src/
├── main.tsx               # Entry — wraps app in QueryClient, Language, Modal providers
├── App.tsx                # Router: protected app layout vs public auth layout
├── components/
│   ├── appLayout.tsx      # Shell: sidebar + top bar + <Outlet />
│   ├── authLayout.tsx     # Auth shell: branded header, footer, i18n selector
│   ├── ProtectedRoute.tsx # Auth guard
│   └── ui/                # Reusable primitives (Button, Input, Sidebar, etc.)
├── pages/
│   ├── home.tsx           # Feed page — Stories + Posts
│   └── auth/              # Login, Signup, Forgot/Reset Password
├── features/              # Domain modules
│   ├── post/              # Post card, create modal, step 1 & 2
│   ├── comments/          # Comment modal, input field, individual comment
│   └── stories/           # Stories bar, story item
├── hooks/                 # React Query wrappers (useUser, useLogin, useSignup, etc.)
├── services/              # Supabase client, API functions (auth, posts)
├── types/                 # TypeScript interfaces (Post, StoryItem)
├── data/                  # Mock data, i18n text bundles
├── context/               # Language context, Modal context
└── utils/helpers/         # timeAgo, truncateCaption, withTimeout
```

### Key Design Decisions

**React Query for server state instead of Redux or Context.** This eliminated boilerplate for loading/error states, provided automatic cache invalidation, and enabled optimistic updates for likes and comments with minimal code.

**Supabase as a single BaaS.** Authentication, PostgreSQL storage, and file storage are all handled by one provider — reducing infrastructure complexity to zero while keeping the door open for Row-Level Security policies.

**Custom i18n over a library.** For the scope of this project, a context-based translation system with filtering by locale was lighter and more maintainable than pulling in react-i18next or similar.

**Zod schemas double as runtime validation and TypeScript types.** Form validation rules are authored once and inferred into types — no duplication.

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project (free tier works)

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Both values can be found in your Supabase dashboard under **Settings > API**.

### Database Setup

Create the following tables in your Supabase SQL editor:

```sql
-- Users (auto-populated by Supabase Auth, reference via auth.users)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  bio TEXT DEFAULT '',
  avatar_url TEXT
);

-- Posts
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) NOT NULL,
  caption TEXT,
  image_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Likes
CREATE TABLE likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(post_id, user_id)
);

-- Comments
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

Create a `post-images` bucket in **Supabase Storage** (public read policy).

## What I Learned

- **Optimistic UI updates with rollback** — handling like/unlike and comment mutations optimistically while catching server errors to revert state
- **Supabase nested queries** — fetching posts with joined user, likes, and comment data in a single query using the `select` API
- **Multi-step form flows** — managing step transitions and shared state (image file) across components without a global store
- **React 19 patterns** — using `forwardRef` with custom input components, `createPortal` for modals, and `React.memo` for render optimization
- **TypeScript generics with mutations** — typing `useMutation` with `LoginVariables` / `LoginResponse` for end-to-end type safety
- **File upload pipelines** — client-side validation, Supabase Storage upload, public URL retrieval, and post insertion as an atomic flow

## Roadmap

- [ ] User profiles with edit capabilities
- [ ] Follow/unfollow system
- [ ] Real-time story viewer (tap-to-advance)
- [ ] Infinite scroll pagination
- [ ] Image compression before upload
- [ ] Search users
- [ ] Direct messaging
- [ ] Row-Level Security policies on Supabase

## License

MIT
