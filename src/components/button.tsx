"use client";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
};

export default function Buttton({
  children,
  className,
  handleClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "w-[269px] h-[32px] bg-[#4150F7] text-[white] rounded-lg cursor-pointer",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
