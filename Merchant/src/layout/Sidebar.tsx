import { Link } from "react-router-dom";

export type SidebarNavItem = {
  label: string;
  to: string;
};

type SidebarProps = {
  items: SidebarNavItem[];
  activePath: string;
};

const Sidebar = ({ items, activePath }: SidebarProps) => {
  return (
    <aside className="w-56 border-r border-gray-200 bg-white p-4">
      <p className="mb-4 text-lg font-semibold text-indigo-600">OrderPP</p>
      <nav className="space-y-2">
        {items.map((item) => {
          const isActive = activePath.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`block rounded-md px-3 py-2 text-sm ${
                isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-indigo-50"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
