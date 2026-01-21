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
  return (
    <div className="flex">
      <CloseModalButton handleClose={handleClose} />
      <div>
        <img src={postImage} alt={post.caption} />
      </div>

      <div>
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
    </div>
  );
}

export default Comments;
