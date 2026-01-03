import { useMutation } from "@tanstack/react-query";
import { createUser, signupUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupUser,
    onSuccess: (user) => {
      console.log(user);
      toast.success("Check your email to confirm your account.");
      // RLS intentinally disabled for UI iteration. Will re-enable with trigger based profile creation
      createUser(user.user);
      navigate("/accounts/login");
    },
    onError: () => {
      toast.error("We couldn’t complete your signup. Please try again.");
    },
  });

  return { signup, isPending };
}
