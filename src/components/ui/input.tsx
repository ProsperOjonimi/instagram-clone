import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classText: string;
  labelText: string;
  labelClass?: string;
};
const baseLabelClasses = `
    pointer-events-none absolute left-2 bottom-3
    origin-[0] scale-75 text-xs text-[#A8A8A8] top-1

  
    transition-all duration-200
    peer-placeholder-shown:top-3
    peer-placeholder-shown:scale-100
    peer-placeholder-shown:text-sm
    peer-focus:top-1
    peer-focus:scale-75
    peer-focus:text-xs
`;
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ classText, labelText, labelClass, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          className={twMerge(
            "border border-gray-400 w-[259px] h-[36px] p-3 rounded-sm bg-[#25292E] text-[#A8A89C] placeholder:text-[12px] peer focus:outline-none",
            classText
          )}
        />
        <label className={twMerge(baseLabelClasses, labelClass)}>
          <p className="text-[12px] -translate-y-1">{labelText}</p>
        </label>
      </div>
    );
  }
);

export default Input;
