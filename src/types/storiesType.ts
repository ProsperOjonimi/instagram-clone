export type StoryItemType = {
  id: string;
  user: {
    id: string;
    username: string;
    avatarUrl: string;
  };
  stories: {
    id: string;
    mediaUrl: string;
    mediaType: "image" | "video";
    createdAt: string;
    viewed: boolean;
  }[];
};
