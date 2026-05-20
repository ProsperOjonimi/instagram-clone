import type { Post } from "../types/postType";

export const mockPosts: Post[] = [
  {
    id: "post_1",
    caption: "Late night coding session. Building this clone brick by brick 🚀",
    image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    created_at: "2025-01-12T21:45:00Z",
    users: {
      id: "user_1",
      username: "prosper.dev",
      avatar_url: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    likes: [],
    comments: [],
  },
  {
    id: "post_2",
    caption: "Medicine in the morning, code at night. No excuses.",
    image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    created_at: "2025-01-11T08:30:00Z",
    users: {
      id: "user_2",
      username: "med.codes",
      avatar_url: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    likes: [],
    comments: [],
  },
  {
    id: "post_3",
    caption: "UI details matter more than people think.",
    image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    created_at: "2025-01-10T16:10:00Z",
    users: {
      id: "user_3",
      username: "frontend.junkie",
      avatar_url: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    likes: [],
    comments: [],
  },
  {
    id: "post_4",
    caption:
      "Consistency beats motivation every single time. Motivation comes and goes, but showing up daily, even on hard days, is what truly builds discipline, growth, and long-term success.",
    image_url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    created_at: "2025-01-09T06:00:00Z",
    users: {
      id: "user_4",
      username: "daily.discipline",
      avatar_url: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    likes: [],
    comments: [],
  },
];
