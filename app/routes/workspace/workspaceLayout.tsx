import { Outlet, useLocation } from "react-router";
import { AppSidebar } from "~/pages/Workspace/Sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";
import { SearchInterface } from "~/components/workspace/SearchInterface";
const WorkspaceLayout = () => {
  const location = useLocation();
  const isAtParentRoute =
    location.pathname === "/workspace" || location.pathname === "/workspace/";

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <div className="w-full">
        {isAtParentRoute ? (
          <div className="w-full text-2xl font-bold p-4">
            <SearchInterface />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
