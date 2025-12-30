import type { Post } from "../types/postType";
import type { StoryItem } from "../types/storiesType";

export const mockPosts: Post[] = [
  {
    id: "post_1",
    caption: "Late night coding session. Building this clone brick by brick 🚀",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    createdAt: "2025-01-12T21:45:00Z",
    user: {
      id: "user_1",
      username: "prosper.dev",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    likesCount: 128,
    commentsCount: 14,
  },
  {
    id: "post_2",
    caption: "Medicine in the morning, code at night. No excuses.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    createdAt: "2025-01-11T08:30:00Z",
    user: {
      id: "user_2",
      username: "med.codes",
      avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    likesCount: 342,
    commentsCount: 27,
  },
  {
    id: "post_3",
    caption: "UI details matter more than people think.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    createdAt: "2025-01-10T16:10:00Z",
    user: {
      id: "user_3",
      username: "frontend.junkie",
      avatarUrl: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    likesCount: 89,
    commentsCount: 6,
  },
  {
    id: "post_4",
    caption: "Consistency beats motivation every single time.",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    createdAt: "2025-01-09T06:00:00Z",
    user: {
      id: "user_4",
      username: "daily.discipline",
      avatarUrl: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    likesCount: 560,
    commentsCount: 48,
  },
];
