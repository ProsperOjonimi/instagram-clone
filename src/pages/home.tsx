import Posts from "../components/Posts";
import Stories from "../components/Stories";

import { mockPosts } from "../data/mockPosts";

function Home() {
  return (
    <>
      <div className="text-white h-full mt-40 md:mt-10 md:mr-auto md:ml-32">
        <Stories />
        <div className="flex flex-col gap-4 md:px-10">
          <div>
            {mockPosts.map((post) => (
              <Posts post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
