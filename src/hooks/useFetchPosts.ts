import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/apiPosts";

function useFetchPosts() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return { posts, isLoading, isError };
}

export default useFetchPosts;
