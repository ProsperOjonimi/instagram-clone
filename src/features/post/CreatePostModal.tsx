import { useEffect, useState } from "react";
import StepOne from "./StepOne";
import { useModalContext } from "../../context/modalContext";
import StepTwo from "./StepTwo";
import CloseModalButton from "../../components/ui/CloseModalButton";

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
    [imageFile],
  );

  return (
    <div
      className="flex bg-neutral-900/90 h-screen absolute w-screen z-[60] items-center justify-center"
      onClick={() => {
        onModalClose();
      }}
    >
      <CloseModalButton handleClose={onModalClose} />
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
