import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  className?: string;
};
export default function Input({
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={twMerge(
        "border border-gray-400 w-[259px] h-[36px] p-3 rounded-sm bg-[#25292E] text-[#A8A89C] placeholder:text-sm",
        className
      )}
    />
  );
}
