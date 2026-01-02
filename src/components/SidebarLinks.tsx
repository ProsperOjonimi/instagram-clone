import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type SidebarLinksProps = {
  children: React.ReactNode;
  path: string;
  text?: string;
  className?: string;
  handleClick?: () => void;
};

const baseStyles =
  "flex gap-4 p-[12px] hover:bg-[#25282C] rounded-lg transition-colors duration-300 w-fit md:w-full text-nowrap";

function SidebarLinks({
  children,
  path,
  text,
  className,
  handleClick,
}: SidebarLinksProps) {
  return (
    <Link
      className={twMerge(baseStyles, className)}
      to={path}
      onClick={handleClick}
    >
      {children}
      <p className="text-[white] font-semibold hidden md:block">{text}</p>
    </Link>
  );
}
export default SidebarLinks;
