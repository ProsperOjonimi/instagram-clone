import Posts from "../components/Posts";
import { mockPosts } from "../data/mockPosts";
function Home() {
  return (
    <div className="text-white h-full">
      <div className="flex flex-col gap-4">
        <div></div>
        <div>
          {mockPosts.map((post) => (
            <Posts post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
