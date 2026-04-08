import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/layout/navbar/Navbar";
import LeftSideBar from "../components/sidebar/LeftSidebar";
import styled from "styled-components";
import RightSidebar from "../components/sidebar/RightSidebar";
import React from "react";

const MainContent = styled.div<{ $isPreview?: boolean }>`
  height: 100vh;
  width: 100%;
  position: relative;
  display: ${(props) => (props.$isPreview ? "block" : "flex")};
`;

const RootLayout = () => {
  const location = useLocation();
  const isPreview = location.pathname === "/preview";
  return (
    <React.Fragment>
      {!isPreview && <Navbar />}

      <MainContent $isPreview={isPreview}>
        {!isPreview && <LeftSideBar />}

        <Outlet />
        {!isPreview && <RightSidebar />}
      </MainContent>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
};

export const Route = createRootRoute({ component: RootLayout });
