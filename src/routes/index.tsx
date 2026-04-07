import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";

export const Content = styled.div`
  height: calc(100vh - 64px);
  width: 60%;
  top: 64px;
  background-color: var(--mainbackground-color);
`;
export const MainWrapper = styled.div`
 display:flex; 
 align-items:center;
 justify-content: between;
 margin-left:10px;

`;
export const HeadingTwo = styled.h2`
 display:flex;
 align-items:center;
 justify-content:center;
`;

export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left:200px;
`;
export const MainComponentNav = styled.li`
  font: bold;
`;
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Content>
      <MainWrapper>
        <HeadingTwo>Brand</HeadingTwo>
        <Navbar>
          <MainComponentNav>Home</MainComponentNav>
          <MainComponentNav>About Us</MainComponentNav>
          <MainComponentNav>Features</MainComponentNav>
          <MainComponentNav>Contact</MainComponentNav>
        </Navbar>
      </MainWrapper>
      <h1>Build Something Amazing</h1>
      <p>Create beautiful websites with our drag and drop builder</p>
      <button>Get Started</button>
      <button>Learn More</button>
    </Content>
  );
}
