type CommentInputFieldProps = {
  comment: string;
  setComment: (comment: string) => void;
};

function CommentInputField({ comment, setComment }: CommentInputFieldProps) {
  return (
    <>
      <input
        type="text"
        className="w-full bg-[#212328] border border-[#2B3036] border-r-0 focus:outline-none pl-5 text-white  border-b-0 border-l-0 text-[14px] pt-[0.6rem]  pb-4"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    </>
  );
}

export default CommentInputField;
