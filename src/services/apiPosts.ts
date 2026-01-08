import type { User } from "@supabase/supabase-js";
import supabase from "./supabase";

export async function uploadImage(userId: string, file: File): Promise<string> {
  if (!(file instanceof File)) throw new Error("Invalid file object");
  if (!file.type.startsWith("image/")) throw new Error("File must be an image");
  if (file.size === 0) throw new Error("File is empty");

  console.log(file.type);

  const filePath = `${userId}/${Math.random()}.jpg`;

  const { error } = await supabase.storage
    .from("post-images")
    .upload(filePath, file, { upsert: true });

  if (error) console.log(`Supabase error, ${error.message}`);

  const { data: imageData } = supabase.storage
    .from("post-images")
    .getPublicUrl(filePath);
  console.log(imageData.publicUrl);
  if (!imageData?.publicUrl) throw new Error("Failed to get public URL");

  return imageData.publicUrl;
}

type CreatePostVariables = {
  user: User | undefined;
  caption: string;

  imageFile: File | null;
};

export async function createPost({
  user,
  caption,
  imageFile,
}: CreatePostVariables) {
  // upload the image first
  if (user && imageFile) {
    const imageURL = await uploadImage(user.id, imageFile);

    // insert the post into the database
    const { data, error } = await supabase
      .from("posts")
      .insert([{ user_id: user.id, caption, image_url: imageURL }])
      .select();

    if (error) throw new Error(error.message);

    return data;
  }
}

export async function fetchPosts() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select(
      `
    id,
    caption,
    image_url,
    created_at,

    users (
      id,
      username,
      avatar_url
    ),

    likes (
    id,
    user_id
  ),

   comments (
    id,
    content,
    created_at,
    users (
      id,
      username
    )
  )
  `
    )
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return posts;
}
