import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { resetPassword } from "../services/apiAuth";

function useResetPassword() {
  const { mutate: reset, isPending } = useMutation({
    mutationFn: resetPassword,
    onSettled: () => {
      toast.success(
        "If an account with that email exists, we’ve sent a password reset link."
      );
    },
  });

  return { reset, isPending };
}

export default useResetPassword;
