import type { StoryItemType } from "../types/storiesType";

export const mockStories: StoryItemType[] = [
  {
    id: "story-user-1",
    user: {
      id: "user-1",
      username: "john_doe",
      avatarUrl: "https://i.pravatar.cc/150?img=12",
    },
    stories: [
      {
        id: "story-1-1",
        mediaUrl: "https://picsum.photos/400/700?random=1",
        mediaType: "image",
        createdAt: "2025-01-10T08:30:00Z",
        viewed: false,
      },
      {
        id: "story-1-2",
        mediaUrl: "https://picsum.photos/400/700?random=2",
        mediaType: "image",
        createdAt: "2025-01-10T09:00:00Z",
        viewed: false,
      },
    ],
  },

  {
    id: "story-user-2",
    user: {
      id: "user-2",
      username: "mary_codes",
      avatarUrl: "https://i.pravatar.cc/150?img=32",
    },
    stories: [
      {
        id: "story-2-1",
        mediaUrl: "https://picsum.photos/400/700?random=3",
        mediaType: "video",
        createdAt: "2025-01-09T21:15:00Z",
        viewed: true,
      },
    ],
  },

  {
    id: "story-user-3",
    user: {
      id: "user-3",
      username: "prosper.dev",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    stories: [
      {
        id: "story-3-1",
        mediaUrl: "https://picsum.photos/400/700?random=4",
        mediaType: "image",
        createdAt: "2025-01-10T11:45:00Z",
        viewed: false,
      },
      {
        id: "story-3-2",
        mediaUrl: "https://picsum.photos/400/700?random=5",
        mediaType: "video",
        createdAt: "2025-01-10T12:00:00Z",
        viewed: false,
      },
      {
        id: "story-3-3",
        mediaUrl: "https://picsum.photos/400/700?random=6",
        mediaType: "image",
        createdAt: "2025-01-10T12:10:00Z",
        viewed: false,
      },
    ],
  },
];
