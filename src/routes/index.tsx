import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";

export const Content = styled.div`
  height: calc(100vh - 64px);
  width: 60%;
  top: 64px;
`;

export const HeadingOne = styled.h1`
  display: flex;
  align-items: center;
`;

export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Content>
      <HeadingOne>Brand</HeadingOne>
      <Navbar>
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Contact</li>
      </Navbar>
    </Content>
  );
}
