import { mockStories } from "../data/mockStories";
import StoryItem from "./StoryItem";

function Stories() {
  return (
    <div className="flex gap-3 mb-8 px-6 ">
      {mockStories.map((story) => (
        <StoryItem story={story} key={story.id} />
      ))}
    </div>
  );
}

export default Stories;
