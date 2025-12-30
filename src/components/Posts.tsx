import type { Post } from "../types/postType";
import { timeAgo } from "../utils/helpers/timeAgo";

type PostProps = {
  post: Post;
};

function Posts({ post }: PostProps) {
  const timeOfPost = timeAgo(post.createdAt);
  return (
    <div className="max-w-[470px] mb-6 px-5">
      <div className="flex justify-between mb-3 px-2">
        <div className="flex items-center gap-3">
          <img
            src={post.user.avatarUrl}
            alt="avatar of the creator"
            className="avatar-url rounded-full -mb-1"
          />

          <div className="flex flex-col">
            <p className="flex gap-1 items-center">
              <span className="font-semibold">{post.user.username}</span>
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
      <div className="post-image-wrapper mb-3 border border-gray-600 rounded-md">
        <img src={post.imageUrl} alt="Post Photo " className="rounded-md mb-" />
      </div>
      {/* Post info */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="flex gap-2 items-center">
              <svg
                aria-label="Like"
                fill="#FFFFFF"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Like</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
              <p className="text-[14px]">{post.likesCount}</p>
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
              <p className="text-[14px]">{post.commentsCount}</p>
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
            <span className="font-semibold">{post.user.username}</span>{" "}
            {post.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Posts;
