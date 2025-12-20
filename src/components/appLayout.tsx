import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex gap-12">
      <h1>Sidebar</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
