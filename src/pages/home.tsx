import Posts from "../features/post/Posts";
import Stories from "../features/stories/Stories";

import { mockPosts } from "../data/mockPosts";
import useFetchPosts from "../hooks/useFetchPosts";

function Home() {
  const { posts, isLoading, isError } = useFetchPosts();
  console.log(posts);

  return (
    <>
      <div className="text-white h-full mt-40 md:mt-10 md:mr-auto md:ml-32">
        <Stories />
        <div className="flex flex-col gap-4 md:px-10">
          {posts ? (
            <div>
              {posts.map((post) => (
                <Posts post={post} key={post.id} />
              ))}
            </div>
          ) : (
            <p>The feed is lonely… be the first to post!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
