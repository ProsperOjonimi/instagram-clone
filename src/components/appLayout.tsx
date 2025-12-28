import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function AppLayout() {
  return (
    <div className="flex bg-[#0c1014]">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <main className="flex justify-center items-center w-[80%]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
