import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { lazy, useEffect } from "react";

import { useAtom } from "jotai";
import { userAtom } from "global";

const Dashboard = lazy(() => import("./Dashboard"));

export default function App() {
  const location = useLocation();
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      user === null &&
      location.pathname.toLowerCase().includes("/dashboard")
    ) {
      navigate("/", { replace: true });
    }
    if (user !== null && location.pathname.toLowerCase() === "/") {
      navigate("/dashboard", { replace: true });
    }
  }, [location]);

  return (
    <>
      {!location.pathname.toLowerCase().includes("/dashboard") ? (
        <Outlet />
      ) : (
        <Dashboard />
      )}
    </>
  );
}
