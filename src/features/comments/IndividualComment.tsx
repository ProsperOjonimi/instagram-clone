import { timeAgo } from "../../utils/helpers/timeAgo";

function IndividualComment({ commentData }: { commentData: any }) {
  const timeOfPost = timeAgo(commentData.created_at);
  const user = commentData.users.username;
  const avatarImage = commentData.users.avatar_url;

  return <div className="flex gap-4"></div>;
}

export default IndividualComment;
