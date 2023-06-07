import { Header, Sidebar } from "components";
import { useEffect, useState } from "react";

import Loading from "./loading";
import { Outlet } from "react-router-dom";
import { SuspenseAfterInitialRender } from "router";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  function toggleSidebar() {
    if (window.innerWidth <= 820) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }
  useEffect(() => {
    toggleSidebar();
    window.addEventListener("resize", toggleSidebar);
  }, []);
  return (
    <div className="container">
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
      <div className="container__main">
        <Header setSidebarOpen={setSidebarOpen} />
        <div className="container__main__content">
          <SuspenseAfterInitialRender fallback={<Loading dashboard={true} />}>
            <Outlet />
          </SuspenseAfterInitialRender>
        </div>
      </div>
    </div>
  );
}
