import { Link } from "react-router"

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="text-lg font-semibold">Workspace</div>
          <div className="space-y-2">
            <Link to="/workspace/main" className="block px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              Dashboard
            </Link>
            <Link to="/workspace/page" className="block px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

    