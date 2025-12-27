import { useMutation } from "@tanstack/react-query";
import { logOut, updateUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useUpdateUser() {
  const navigate = useNavigate();
  const { mutate: update, isPending } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      logOut();
      navigate("/");
    },
  });

  return { update, isPending };
}

export default useUpdateUser;
