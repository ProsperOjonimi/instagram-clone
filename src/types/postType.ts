export type Post = {
  id: string;
  caption: string;
  image_url: string;
  created_at: string;
  user: {
    id: string;
    username: string;
    avatar_url: string;
  };
  likesCount: number;
  commentsCount: number;
};
