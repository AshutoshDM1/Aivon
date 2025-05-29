import { Outlet, useLocation } from "react-router";
import Sidebar from "~/pages/Workspace/Sidebar";

const WorkspaceLayout = () => {
  const location = useLocation();
  const isAtParentRoute = location.pathname === "/workspace" || location.pathname === "/workspace/";
  
  return (
    <div className="flex h-screen">
      <div className="w-1/6 bg-gray-400 pl-2">
        <Sidebar />
      </div>
      <div className="w-5/6 bg-gray-100 ">
        {isAtParentRoute ? (
          <div className="text-2xl font-bold p-4">Welcome to Workspace</div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
