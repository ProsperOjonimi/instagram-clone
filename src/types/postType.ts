import type { User } from "@supabase/supabase-js";

export type Post = {
  id: string;
  caption: string;
  image_url: string;
  created_at: string;
  users: {
    id: string;
    username: string;
    avatar_url: string;
  };
  likes: { id: string; user_id: string }[];
  comments: any[];
};

export type CreatePostVariables = {
  user: User | undefined;
  caption: string;

  imageFile: File | null;
};
