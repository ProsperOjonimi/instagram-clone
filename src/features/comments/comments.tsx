import { createPortal } from "react-dom";
import CloseModalButton from "../../components/ui/CloseModalButton";
import type { Post } from "../../types/postType";
import CommentInputField from "./CommentInputField";
import IndividualComment from "./IndividualComment";

import { useState } from "react";
import useComments from "../../hooks/useComment";
import { useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";

type CommentsProps = {
  post: Post;
  handleClose: () => void;
};

export type CommentType = {
  id: string;
  content: string;
  created_at: string;
  users: {
    id: string | undefined;
    username: string;
    avatar_url: string;
  };
};
function Comments({ post, handleClose }: CommentsProps) {
  const postID = post.id;

  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<User>(["user"]);
  const currentUserID = currentUser?.id;

  const postImage = post.image_url;
  console.log(postImage);
  const postComments = post.comments;
  console.log(postComments);
  const modalRoot = document.getElementById("root");

  // getting user data
  const user = post.users;
  const username = user?.username;
  const avatarURL = user?.avatar_url;
  const [commentArray, setCommentArray] = useState<CommentType[]>(postComments);
  const [comment, setComment] = useState<string>("");
  // Comment custom hook consumption
  const { commentOnPost, isError } = useComments({ setCommentArray, comment });

  function commentHandler() {
    commentOnPost({ postID, currentUserID, comment });
    const d = new Date();

    const formatted = d.toISOString().replace("T", " ").replace("Z", "+00");
    const commentObject = {
      id: crypto.randomUUID(),
      content: comment,
      created_at: formatted,
      users: {
        id: currentUserID,
        username: currentUser?.user_metadata.username,
        avatar_url: currentUser?.user_metadata.avatar_url,
      },
    };
    setCommentArray((prev) => [...prev, commentObject]);
    console.log(isError);
    setComment("");
  }

  // User comment state

  // Remove comment on comment patch faliure

  // useEffect(
  //   function () {
  //     if (isError) {
  //       setCommentArray((prev) => prev.filter((c) => c.content !== comment));
  //     }
  //   },
  //   [isError, setCommentArray, comment],
  // );

  if (!modalRoot) return null;
  return createPortal(
    <div className="md:flex absolute md:top-1/2 md:left-1/2 -translate-x-1/2 md:-translate-y-1/2 comment-image-wrapper w-full z-50 bottom-0 h-[1000px] max-w-[700px] right-1/2 left-1/2 rounded-t-3xl md:rounded-none ">
      <CloseModalButton handleClose={handleClose} />
      <div className="w-full hidden md:block ">
        <img src={postImage} alt={post.caption} className="" />
      </div>

      <div className="bg-[#212328] w-full flex flex-col ">
        <div className="flex gap-4 pl-5 pt-6 items-center mb-7">
          <div>
            <img
              src={avatarURL}
              alt="avatar of user "
              className="max-w-[28px] max-h-[28px] rounded-full"
            />
          </div>
          <p className="text-[white] text-[14px]">{username}</p>
        </div>
        <div className="pl-[20px]">
          {commentArray.length === 0 ? (
            <p className="text-white text-center mt-48 text-[18px]">
              Be the first to comment
            </p>
          ) : (
            <div className="overflow-y-scroll h-[23rem]">
              {commentArray.map((comment) => (
                <IndividualComment key={comment.id} commentData={comment} />
              ))}
            </div>
          )}
        </div>

        {/* Comment input field */}
        <div className="justify-end mt-auto relative">
          <CommentInputField comment={comment} setComment={setComment} />

          <button
            className={`absolute ${comment ? "text-white" : "text-[#8F96A0] cursor-not-allowed"} right-3 top-3 text-[14px]`}
            disabled={!comment}
            onClick={commentHandler}
          >
            Post
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Comments;
