import { Link } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";
import ProfilePic from "../../public/user-profile-pic.jpg";
import { useModalContext } from "../context/modalContext";

function Sidebar() {
  const { setShowModal } = useModalContext();
  return (
    <div className="bg-[#0c1014] flex  px-3 text-nowrap  justify-around border-t-[0.1px] border-gray-800 h-[48px] md:flex-col md:w-[60px] md:justify-between md:h-screen md:text-nowrap md:hover:w-[250px] md:overflow-hidden md:transition-all duration-300 ">
      <Link
        className="p-[12px] w-[48px] hover:bg-[#25282C] rounded-lg transition-colors duration-300 hidden md:block"
        to="/"
      >
        <svg
          aria-label="Instagram"
          fill="#FFFFFF"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Instagram</title>
          <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
        </svg>
      </Link>
      <SidebarLinks path="/" text="Home">
        <div>
          <svg
            aria-label="Home"
            fill="#FFFFFF"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Home</title>
            <path d="m21.762 8.786-7-6.68a3.994 3.994 0 0 0-5.524 0l-7 6.681A4.017 4.017 0 0 0 1 11.68V19c0 2.206 1.794 4 4 4h3.005a1 1 0 0 0 1-1v-7.003a2.997 2.997 0 0 1 5.994 0V22a1 1 0 0 0 1 1H19c2.206 0 4-1.794 4-4v-7.32a4.02 4.02 0 0 0-1.238-2.894Z"></path>
          </svg>
        </div>
      </SidebarLinks>
      <SidebarLinks text="Search" path="#">
        <div>
          <svg
            aria-label="Search"
            fill=""
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Search</title>
            <path
              d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
              fill="none"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <line
              fill="none"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="16.511"
              x2="22"
              y1="16.511"
              y2="22"
            ></line>
          </svg>
        </div>
      </SidebarLinks>
      <SidebarLinks text="Explore" path="#" className=" hidden md:flex ">
        <div>
          <svg
            aria-label="Explore"
            fill=""
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Explore</title>
            <polygon
              fill="none"
              points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
            <polygon
              fill-rule="evenodd"
              points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
            ></polygon>
            <circle
              cx="12.001"
              cy="12.005"
              fill="none"
              r="10.5"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></circle>
          </svg>
        </div>
      </SidebarLinks>
      <SidebarLinks text="Reels" path="#">
        <div>
          <svg
            aria-label="Reels"
            fill="#FFFFFF"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Reels</title>
            <path d="M22.935 7.468c-.063-1.36-.307-2.142-.512-2.67a5.341 5.341 0 0 0-1.27-1.95 5.345 5.345 0 0 0-1.95-1.27c-.53-.206-1.311-.45-2.672-.513C15.333 1.012 14.976 1 12 1s-3.333.012-4.532.065c-1.36.063-2.142.307-2.67.512-.77.298-1.371.69-1.95 1.27a5.36 5.36 0 0 0-1.27 1.95c-.206.53-.45 1.311-.513 2.672C1.012 8.667 1 9.024 1 12s.012 3.333.065 4.532c.063 1.36.307 2.142.512 2.67.297.77.69 1.372 1.27 1.95.58.581 1.181.974 1.95 1.27.53.206 1.311.45 2.672.513C8.667 22.988 9.024 23 12 23s3.333-.012 4.532-.065c1.36-.063 2.142-.307 2.67-.512a5.33 5.33 0 0 0 1.95-1.27 5.356 5.356 0 0 0 1.27-1.95c.206-.53.45-1.311.513-2.672.053-1.198.065-1.555.065-4.531s-.012-3.333-.065-4.532Zm-1.998 8.972c-.05 1.07-.228 1.652-.38 2.04-.197.51-.434.874-.82 1.258a3.362 3.362 0 0 1-1.258.82c-.387.151-.97.33-2.038.379-1.162.052-1.51.063-4.441.063s-3.28-.01-4.44-.063c-1.07-.05-1.652-.228-2.04-.38a3.354 3.354 0 0 1-1.258-.82 3.362 3.362 0 0 1-.82-1.258c-.151-.387-.33-.97-.379-2.038C3.011 15.28 3 14.931 3 12s.01-3.28.063-4.44c.05-1.07.228-1.652.38-2.04.197-.51.434-.875.82-1.26a3.372 3.372 0 0 1 1.258-.819c.387-.15.97-.329 2.038-.378C8.72 3.011 9.069 3 12 3s3.28.01 4.44.063c1.07.05 1.652.228 2.04.38.51.197.874.433 1.258.82.385.382.622.747.82 1.258.151.387.33.97.379 2.038C20.989 8.72 21 9.069 21 12s-.01 3.28-.063 4.44Zm-4.584-6.828-5.25-3a2.725 2.725 0 0 0-2.745.01A2.722 2.722 0 0 0 6.988 9v6c0 .992.512 1.88 1.37 2.379.432.25.906.376 1.38.376.468 0 .937-.123 1.365-.367l5.25-3c.868-.496 1.385-1.389 1.385-2.388s-.517-1.892-1.385-2.388Zm-.993 3.04-5.25 3a.74.74 0 0 1-.748-.003.74.74 0 0 1-.374-.649V9a.74.74 0 0 1 .374-.65.737.737 0 0 1 .748-.002l5.25 3c.341.196.378.521.378.652s-.037.456-.378.651Z"></path>
          </svg>
        </div>
      </SidebarLinks>
      <SidebarLinks text="Messages" path="#">
        <div>
          <svg
            aria-label="Messages"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Messages</title>
            <path
              d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z"
              fill="none"
              stroke="#FFFFFF"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <line
              fill="none"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="7.488"
              x2="15.515"
              y1="12.208"
              y2="7.641"
            ></line>
          </svg>
        </div>
      </SidebarLinks>
      <SidebarLinks text="Notifications" path="#" className="hidden md:flex">
        <div>
          <svg
            aria-label="Notifications"
            fill="#FFFFFF"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Notifications</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
          </svg>
        </div>
      </SidebarLinks>
      <SidebarLinks
        text="Create"
        path="#"
        className="hidden md:flex"
        handleClick={() => setShowModal(true)}
      >
        <div>
          <svg
            aria-label="New post"
            fill="#FFFFFF"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>New post</title>
            <path d="M21 11h-8V3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2Z"></path>
          </svg>
        </div>
      </SidebarLinks>

      <SidebarLinks text="Profile" path="#">
        <div className="w-[24px] h-[24px]">
          <img
            src={ProfilePic}
            alt="user profile pic"
            className="min-w-[24px] h-full rounded-full"
          />
        </div>
      </SidebarLinks>

      <SidebarLinks text="More" path="#" className="hidden md:flex">
        <div>
          <svg
            aria-label="Settings"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Settings</title>
            <line
              fill="none"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="3"
              x2="21"
              y1="4"
              y2="4"
            ></line>
            <line
              fill="none"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="3"
              x2="21"
              y1="12"
              y2="12"
            ></line>
            <line
              fill="none"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="3"
              x2="21"
              y1="20"
              y2="20"
            ></line>
          </svg>
        </div>
      </SidebarLinks>
      <SidebarLinks text="Also from Meta" path="#" className="hidden md:flex ">
        <div>
          <svg
            aria-label="Also from Meta"
            fill="#FFFFFF"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Also from Meta</title>
            <path d="M9.5 11h5c1.379 0 2.5-1.122 2.5-2.5v-5C17 2.122 15.879 1 14.5 1h-5A2.503 2.503 0 0 0 7 3.5v5C7 9.878 8.12 11 9.5 11ZM9 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5ZM8.499 13h-5a2.503 2.503 0 0 0-2.5 2.5v5c0 1.378 1.12 2.5 2.5 2.5h5c1.379 0 2.5-1.122 2.5-2.5v-5c0-1.378-1.121-2.5-2.5-2.5Zm.5 7.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5Zm11.5-7.5h-5a2.503 2.503 0 0 0-2.5 2.5v5c0 1.378 1.12 2.5 2.5 2.5h5c1.379 0 2.5-1.122 2.5-2.5v-5c0-1.378-1.121-2.5-2.5-2.5Zm.5 7.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5Z"></path>
          </svg>
        </div>
      </SidebarLinks>
    </div>
  );
}

export default Sidebar;
