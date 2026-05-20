import supabase from "./supabase";
import type { CreatePostVariables } from "../types/postType";

// Upload Post Image
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

// Create Post
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

// Fetch Posts
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
      username,
      avatar_url
    )
  )
  `,
    )
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return (posts as any[])?.map((post) => ({
    ...post,
    users: Array.isArray(post.users) ? post.users[0] : post.users,
    comments: (post.comments as any[])?.map((comment: any) => ({
      ...comment,
      users: Array.isArray(comment.users) ? comment.users[0] : comment.users,
    })),
  })) as any;
}

// Like Post

export async function likePost(postID: string, userID: string | undefined) {
  const { data, error } = await supabase
    .from("likes")
    .insert([{ post_id: postID, user_id: userID }])
    .select();

  if (error) throw new Error("cannot fetch likes");

  return data;
}
// unlike post

export async function unlikePost(postID: string, userID: string | undefined) {
  const { data, error } = await supabase
    .from("likes")
    .delete()
    .eq("post_id", postID)
    .eq("user_id", userID);

  if (error) throw new Error(error.message);

  console.log("unlikePost userID:", userID);

  return data;
}

export async function commentPost(
  postID: string,
  userID: string | undefined,
  content: string,
) {
  const { data, error } = await supabase
    .from("comments")
    .insert([{ post_id: postID, user_id: userID, content: content }])
    .select();
  if (error) throw new Error(error.message);

  return data;
}
