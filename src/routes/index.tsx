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
 color:var(--primary-color);
`;

export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left:220px;
`;
export const MainComponentNav = styled.li`
  font-weight:800px;
`;

export const BodyWrapper = styled.div`
margin-top:200px;
 text-align:center;
`;
export const HeadingThree = styled.h2`
  padding-bottom:20px;
`;
export const Paragraph = styled.p`
  padding-bottom: 20px;
  font-size: var(--font-size-xl);
`;
export const ButtonOne = styled.button`
  margin-right: 20px;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: var(--font-size-xl);
  background-color:var(--primary-color);
  color:#f0f0f0;
`;

export const ButtonTwo = styled.button`
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: var(--font-size-xl);
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
      <button>Get Started</button>
      <BodyWrapper>
        <HeadingThree>Build Something Amazing</HeadingThree>
      <Paragraph>Create beautiful websites with our drag and drop builder</Paragraph>
      <ButtonOne>Get Started</ButtonOne>
      <ButtonTwo>Learn More</ButtonTwo>
      </BodyWrapper>
      
    </Content>
  );
}
