import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupUser,
    onSuccess: (user) => {
      console.log(user);
      navigate("/accounts/login");
    },
  });

  return { signup, isPending };
}
