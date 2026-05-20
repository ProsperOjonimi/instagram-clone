import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentPost } from "../services/apiPosts";
import type { CommentType } from "../features/comments/comments";

type CommentParameters = {
  postID: string;
  currentUserID: string | undefined;
  comment: string;
};

type UseCommentsProps = {
  setCommentArray: React.Dispatch<React.SetStateAction<CommentType[]>>;
  comment: string;
};
function useComments({ setCommentArray, comment }: UseCommentsProps) {
  const queryClient = useQueryClient();
  const { mutate: commentOnPost, isError } = useMutation({
    mutationFn: ({ postID, currentUserID, comment }: CommentParameters) =>
      commentPost(postID, currentUserID, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: () => {
      setCommentArray((prev) => prev.filter((c) => c.content !== comment));
    },
  });

  return { commentOnPost, isError };
}

export default useComments;
