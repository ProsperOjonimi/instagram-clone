import { useEffect, useState } from "react";
import StepOne from "./StepOne";
import { useModalContext } from "../../context/modalContext";
import StepTwo from "./StepTwo";

function CreatePostModal() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { setShowModal } = useModalContext();
  console.log(imageFile);
  console.log(currentStep);

  function onModalClose() {
    setShowModal(false);
    setImageFile(null);
  }
  // check if image exists, and if so, change the step to the next step
  useEffect(
    function () {
      if (imageFile !== null) {
        setCurrentStep((prev) => prev + 1);
      }
    },
    [imageFile]
  );

  return (
    <div
      className="flex bg-neutral-900/90 h-screen absolute w-screen z-[60] items-center justify-center"
      onClick={() => {
        onModalClose();
      }}
    >
      <button
        className="absolute top-5 right-10"
        onClick={() => onModalClose()}
      >
        <svg
          aria-label="Close"
          fill="currentColor"
          height="18"
          role="img"
          viewBox="0 0 24 24"
          width="18"
        >
          <title>Close</title>
          <polyline
            fill="none"
            points="20.643 3.357 12 12 3.353 20.647"
            stroke="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          ></polyline>
          <line
            fill="none"
            stroke="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            x1="20.649"
            x2="3.354"
            y1="20.649"
            y2="3.354"
          ></line>
        </svg>
      </button>
      <div onClick={(e) => e.stopPropagation()} className=" h-[391px]">
        {currentStep === 1 && <StepOne setImageFile={setImageFile} />}
        {currentStep === 2 && (
          <StepTwo
            setCurrentStep={setCurrentStep}
            setImageFile={setImageFile}
            imageFile={imageFile}
          />
        )}
      </div>
    </div>
  );
}

export default CreatePostModal;
