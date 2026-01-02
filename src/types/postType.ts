export type Post = {
  id: string;
  caption: string;
  imageUrl: string;
  createdAt: string;
  user: {
    id: string;
    username: string;
    avatarUrl?: string;
  };
  likesCount: number;
  commentsCount: number;
};
