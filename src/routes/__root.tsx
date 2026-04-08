import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/layout/navbar/Navbar";
import LeftSideBar from "../components/sidebar/LeftSidebar";
import styled from "styled-components";
import RightSidebar from "../components/sidebar/RightSidebar";
import React from "react";

const MainContent = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
`;
const RootLayout = () => {
  return (
    <React.Fragment>
       <Navbar />
      <MainContent>
        <LeftSideBar />
        <Outlet />
         <RightSidebar />
      </MainContent>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
};

export const Route = createRootRoute({ component: RootLayout });
