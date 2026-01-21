import { useEffect, useState } from "react";
import type { Post } from "../../types/postType";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { timeAgo } from "../../utils/helpers/timeAgo";
import { truncateCaption } from "../../utils/helpers/truncateCaption";
import { likePost, unlikePost } from "../../services/apiPosts";
import { useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";

type PostProps = {
  post: Post;
};

function Posts({ post }: PostProps) {
  const queryClient = useQueryClient();

  const user: User | undefined = queryClient.getQueryData(["user"]);

  const [showFullCaption, setShowFullCaption] = useState<boolean>(false);
  const timeOfPost = timeAgo(post.created_at);
  const fullCaption = post.caption;
  const truncatedCaption = truncateCaption(fullCaption);
  const finalCaption = showFullCaption ? fullCaption : truncatedCaption;

  const [likesCount, setLikesCount] = useState<number>(post.likes.length);

  // Like post

  const likes = post.likes;
  const isPostLikedByUser = likes.some(
    (like: { id: string; user_id: string }) => like.user_id === user?.id,
  );
  const [isLike, setIsLike] = useState<boolean>(isPostLikedByUser);

  async function handleAddLike() {
    try {
      console.log(post);
      setIsLike((prev: boolean) => !prev);

      setLikesCount((prev) => prev + 1);

      await likePost(post.id, user?.id);

      queryClient.invalidateQueries({ queryKey: ["posts"] });
    } catch {
      setIsLike(false);
      setLikesCount((prev) => prev - 1);
    }
  }

  async function handleRemoveLike() {
    try {
      setIsLike((prev) => !prev);
      setLikesCount((prev) => prev - 1);
      await unlikePost(post.id, user?.id);

      queryClient.invalidateQueries({ queryKey: ["posts"] });
    } catch {
      setIsLike(true);
      setLikesCount((prev) => prev + 1);
    }
  }

  useEffect(
    function () {
      if (finalCaption === post.caption) setShowFullCaption(true);
    },
    [setShowFullCaption, finalCaption, post.caption],
  );
  return (
    <div className="max-w-[470px] mb-6 px-5">
      <div className="flex justify-between mb-3 px-2">
        <div className="flex items-center gap-3">
          <img
            src={post.users.avatar_url}
            alt="avatar of the creator"
            loading="lazy"
            className="avatar-url rounded-full -mb-1"
          />

          <div className="flex flex-col">
            <p className="flex gap-1 items-center">
              <span className="font-semibold">{post.users.username}</span>
              <span className="text-[#A8A8A8]">•</span>
              <span className="text-[#A8A8A8] text-[14px] -mb-1">
                {timeOfPost}
              </span>
            </p>
            <p className="text-[12px]">Suggested post</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[#708DF0] bg-none hover:text-[#A3BCFF] hover:underline">
            Follow
          </button>
          <div>
            <svg
              aria-label="More options"
              fill="#FFFFFF"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>More options</title>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
      </div>
      {/* Post image */}
      <div
        className="post-image-wrapper mb-3 border border-gray-600 rounded-md"
        onDoubleClick={() => {
          if (!isLike) handleAddLike();

          if (isLike && likesCount > 0) handleRemoveLike();
        }}
      >
        <img
          src={post.image_url}
          alt="Post Photo "
          className="rounded-md mb-"
          loading="lazy"
        />
      </div>
      {/* Post info */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => {
                  if (!isLike) handleAddLike();

                  if (isLike && likesCount > 0) handleRemoveLike();
                }}
              >
                {isLike ? (
                  <FaHeart className="text-[#FF3040] text-xl" size={24} />
                ) : (
                  <FaRegHeart size={24} />
                )}
              </button>

              <p className="text-[14px]">{likesCount}</p>
            </div>
            {/*  */}
            <div className="flex gap-2 items-center">
              <svg
                aria-label="Comment"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Comment</title>
                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
              <p className="text-[14px]">{post.comments.length}</p>
            </div>
            {/*  */}
            <div className="flex">
              <svg
                aria-label="Share"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Share</title>
                <path
                  d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="7.488"
                  x2="15.515"
                  y1="12.208"
                  y2="7.641"
                ></line>
              </svg>
            </div>
          </div>

          <div>
            <svg
              aria-label="Save"
              fill=""
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Save</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="#FFFFFF "
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>

          {/*  */}
        </div>

        {/* Post description */}
        <div className="mt-2">
          <p>
            <span className="font-semibold">{post.users.username}</span>{" "}
            <span>
              {`${finalCaption}`}{" "}
              {!showFullCaption ? (
                <button
                  className="text-[#A8A8A8] text-[14px]"
                  onClick={() => setShowFullCaption(true)}
                >
                  more
                </button>
              ) : (
                ""
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
