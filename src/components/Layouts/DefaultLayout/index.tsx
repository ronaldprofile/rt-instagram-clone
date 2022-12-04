import { Outlet } from "react-router-dom";
import { Sidebar } from "../../Sidebar";

export function DefaultLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
