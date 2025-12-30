import type { StoryItemType } from "../types/storiesType";

type StoryItemProps = {
  story: StoryItemType;
};

function StoryItem({ story }: StoryItemProps) {
  return (
    <div className="p-[3px] rounded-full  bg-[linear-gradient(90deg,#FFB800,#FF6A0D,#F50F5A,#D300C5,#E81650)]">
      <div className="rounded-full p-[3px] bg-[#0C1014]">
        <img
          src={story.user.avatarUrl}
          alt="Avatar of creator"
          className="rounded-full w-[89px] h-[89px]"
        />
      </div>
    </div>
  );
}
export default StoryItem;
