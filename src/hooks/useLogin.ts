import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

type LoginVariables = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: object;
};
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: login,
    isError,
    isPending,
  } = useMutation<LoginResponse, Error, LoginVariables>({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      console.log(user);
      navigate("/home");
    },

    onError: (err) => {
      console.error("An Error occured", err);
    },
  });

  return { login, isPending, isError };
}
