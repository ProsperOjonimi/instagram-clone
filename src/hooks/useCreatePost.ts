import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../services/apiPosts";
import toast from "react-hot-toast";
import { useModalContext } from "../context/modalContext";

function useCreatePost() {
  const queryClient = useQueryClient();
  const { setShowModal } = useModalContext();
  const { mutate: create, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created successfully");
      setShowModal(false);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  return { create, isPending };
}

export default useCreatePost;
