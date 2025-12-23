import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function AppLayout() {
  return (
    <div className="flex gap-12 bg-[#0c1014]">
      <Sidebar />
      <main className="flex justify-center items-center w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
