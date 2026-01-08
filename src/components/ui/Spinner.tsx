import { twMerge } from "tailwind-merge";

function Spinner({ classText }: { classText?: string }) {
  const baseStyles =
    "w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin";
  return (
    <div className="flex justify-center items-center">
      <div className={twMerge(baseStyles, classText)}></div>
    </div>
  );
}

export default Spinner;
