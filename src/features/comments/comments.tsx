import { createPortal } from "react-dom";
import CloseModalButton from "../../components/ui/CloseModalButton";
import type { Post } from "../../types/postType";
import CommentInputField from "./CommentInputField";
import IndividualComment from "./IndividualComment";

import { useState } from "react";

type CommentsProps = {
  post: Post;
  handleClose: () => void;
};
function Comments({ post, handleClose }: CommentsProps) {
  const postImage = post.image_url;
  console.log(postImage);
  const postComments = post.comments;
  console.log(postComments);
  const modalRoot = document.getElementById("root");

  // getting user data
  const user = post.users;
  const username = user?.username;
  const avatarURL = user?.avatar_url;

  // User comment state
  const [comment, setComment] = useState<string>("");

  if (!modalRoot) return null;
  return createPortal(
    <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 comment-image-wrapper w-full z-50 ">
      <CloseModalButton handleClose={handleClose} />
      <div className="w-full">
        <img src={postImage} alt={post.caption} className="" />
      </div>

      <div className="bg-[#212328] w-full flex flex-col">
        <div className="flex gap-4 pl-5 pt-3 items-center">
          <div>
            <img
              src={avatarURL}
              alt="avatar of user "
              className="max-w-[28px] max-h-[28px] rounded-full"
            />
          </div>
          <p className="text-[white] text-[14px]">{username}</p>
        </div>
        <div className="">
          {postComments.length > 0 ? (
            postComments.map((comment) => (
              <IndividualComment commentData={comment} />
            ))
          ) : (
            <p className="text-white text-center mt-48 text-[18px]">
              Be the first to comment
            </p>
          )}
        </div>

        {/* Comment input field */}
        <div className="justify-end mt-auto relative">
          <CommentInputField comment={comment} setComment={setComment} />
          <p
            className={`absolute ${comment ? "text-white" : "text-[#8F96A0]"} right-3 top-4`}
          >
            Post
          </p>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Comments;
