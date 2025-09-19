import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar, { SidebarNavItem } from "./Sidebar";
import Footer from "./Footer";

// Sidebar navigation map; keep this in sync with protected routes.
const navItems: SidebarNavItem[] = [
  { label: "Dashboard", to: "/dashboard" },
  // Add more links here as your app grows.
];

const MainLayout = () => {
  const { pathname } = useLocation();
  const activeLabel =
    navItems.find((item) => pathname.startsWith(item.to))?.label ?? "OrderPP";

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar items={navItems} activePath={pathname} />

      <div className="flex flex-col flex-1">
        <Header title={activeLabel} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
