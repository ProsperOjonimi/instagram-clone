import { useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";

function StepTwo({
  setCurrentStep,
  setImageFile,
  imageFile,
}: {
  setCurrentStep: (step: number) => void;
  setImageFile: (x: File | null) => void;
  imageFile: File | null;
}) {
  // Image preview
  let imagePreview;

  if (imageFile !== null) {
    imagePreview = URL.createObjectURL(imageFile);
  }

  // Getting the user from React Query's cache
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(["user"]);
  const username = user?.user_metadata.username;
  console.log(username);

  function handleBackButtonClick() {
    setCurrentStep(1);
    setImageFile(null);
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
        <button className="text-[#708DF0] hover:underline hover:text-[#A3BCFF] transition-all duration-200">
          Share
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
        <div className="flex-1 bg-[#212328]">
          <div>
            <img />
            <p>{username}</p>
          </div>
          <textarea />
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
