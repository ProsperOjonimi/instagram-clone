import { useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";
import useCreatePost from "../../hooks/useCreatePost";
import { useState } from "react";
import Spinner from "../../components/ui/Spinner";

function StepTwo({
  setCurrentStep,
  setImageFile,
  imageFile,
}: {
  setCurrentStep: (step: number) => void;
  setImageFile: (x: File | null) => void;
  imageFile: File | null;
}) {
  const [caption, setCaption] = useState<string>("");
  // Image preview
  let imagePreview;

  if (imageFile !== null) {
    imagePreview = URL.createObjectURL(imageFile);
  }

  // Getting the user from React Query's cache
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(["user"]);
  const username = user?.user_metadata.username;
  const avatarURL = user?.user_metadata.avatar_url;
  const { create, isPending } = useCreatePost();
  console.log(username);

  function handleBackButtonClick() {
    setCurrentStep(1);
    setImageFile(null);
  }

  function handleSharePost() {
    create({ user, caption, imageFile });
  }

  return (
    <div className="w-[350px] md:w-[753px] rounded-xl ">
      <div className="flex gap-14 md:gap-64 bg-[#0C1014] py-3 rounded-xl rounded-b-none border-b border-gray-500">
        <button className="pl-4" onClick={() => handleBackButtonClick()}>
          <svg
            aria-label="Back"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Back</title>
            <line
              fill="none"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="2.909"
              x2="22.001"
              y1="12.004"
              y2="12.004"
            ></line>
            <polyline
              fill="none"
              points="9.276 4.726 2.001 12.004 9.276 19.274"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polyline>
          </svg>
        </button>
        <p className="text-white font-semibold text-[16px]">Create new post</p>
        <button
          className="text-[#708DF0] hover:underline hover:text-[#A3BCFF] transition-all duration-200"
          onClick={() => handleSharePost()}
          disabled={isPending}
        >
          {isPending ? <Spinner /> : " Share"}
        </button>
      </div>
      <div className="flex h-[349px]">
        <div>
          <img
            src={imagePreview}
            alt="Post preview"
            className="h-[349px] w-full hidden md:block"
          />
        </div>
        <div className="flex-1 bg-[#212328] flex flex-col gap-2 pl-5 pt-4">
          <div className="flex gap-3 items-center mb-2">
            {/* image of user avatar */}

            <img
              src={avatarURL}
              alt="avatar of user "
              className=" w-[28px] h-[28px] rounded-full"
            />

            <p className="text-[white] text-[14px]">{username}</p>
          </div>
          <textarea
            className="bg-[#212328] text-white focus:outline-none h-52 pr-3"
            maxLength={2200}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
