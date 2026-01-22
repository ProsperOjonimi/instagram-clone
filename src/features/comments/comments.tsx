import { createPortal } from "react-dom";
import CloseModalButton from "../../components/ui/CloseModalButton";
import type { Post } from "../../types/postType";
import CommentInputField from "./CommentInputField";
import IndividualComment from "./IndividualComment";

type CommentsProps = {
  post: Post;
  handleClose: () => void;
};
function Comments({ post, handleClose }: CommentsProps) {
  const postImage = post.image_url;
  const postComments = post.comments;
  const modalRoot = document.getElementById("root");

  if (!modalRoot) return null;
  return createPortal(
    <div className="flex absolute top-10 left-44 comment-image-wrapper w-full z-50">
      <CloseModalButton handleClose={handleClose} />
      <div className="w-full">
        <img src={postImage} alt={post.caption} className="" />
      </div>

      <div className="bg-[#212328] w-full">
        <div>
          {postComments.map((comment) => (
            <IndividualComment commentData={comment} />
          ))}
        </div>

        {/* Comment input field */}
        <div>
          <CommentInputField />
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Comments;
