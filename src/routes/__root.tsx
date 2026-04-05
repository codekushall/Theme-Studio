import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/layout/navbar/Navbar";
import SideBar from "../components/leftsidebar/LeftSidebar";

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <SideBar />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
