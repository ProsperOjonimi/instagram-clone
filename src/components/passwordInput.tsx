import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "./button";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classText?: string;
  passwordValue?: string;
  labelText: string;
  register: any;
  idValue: string;
};
const PasswordInput = ({
  classText,
  passwordValue,
  labelText,
  register,
  idValue,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative">
      <input
        placeholder=" "
        className={twMerge(
          "border border-gray-400 w-[259px] h-[36px] p-3 rounded-sm bg-[#25292E] text-[#A8A89C] placeholder:text-[12px] peer focus:outline-none",
          classText
        )}
        type={showPassword ? "text" : "password"}
        id={idValue}
        {...props}
        ref={(e) => {
          register(idValue).ref(e);
          passwordRef.current = e;
        }}
      />

      {passwordValue && (
        <Button
          type="button"
          handleClick={() => {
            if (!passwordRef.current) return;
            setShowPassword((show) => !show);
          }}
          className="absolute w-[50px] text-[14px] h-[25px] bg-[#25292E] top-[6px] right-2  rounded-sm
             ring-2 ring-white "
        >
          {showPassword ? "Hide" : "Show"}
        </Button>
      )}
      <label
        className="
    pointer-events-none absolute left-2 bottom-3
    origin-[0] scale-75 text-xs text-[#A8A8A8] top-1

  
    transition-all duration-200
    peer-placeholder-shown:top-3
    peer-placeholder-shown:scale-100
    peer-placeholder-shown:text-sm
    peer-focus:top-1
    peer-focus:scale-75
    peer-focus:text-xs
  "
      >
        <p className="text-[12px] -translate-y-1">{labelText}</p>
      </label>
    </div>
  );
};

export default PasswordInput;
