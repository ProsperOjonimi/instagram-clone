import { timeAgo } from "../../utils/helpers/timeAgo";

function IndividualComment({ commentData }: { commentData: any }) {
  const timeOfComment = timeAgo(commentData.created_at);
  const user = commentData.users.username;
  const avatarImage = commentData.users.avatar_url;
  const commentContent = commentData.content;

  return (
    <div className="mb-6">
      <div className="flex  items-center">
        <div>
          <img
            src={avatarImage}
            alt="avatar of user "
            className="max-w-[28px] max-h-[28px] rounded-full"
          />
        </div>
        <p className="text-[white] text-[14px] font-semibold ml-4">{user}</p>
        <p className="text-white text-[14px] ml-2">{commentContent}</p>
      </div>

      <p className="text-[#A2AAB4] text-[12px] ml-10 mt-1 font-semibold">
        {timeOfComment}
      </p>
    </div>
  );
}

export default IndividualComment;
