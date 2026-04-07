import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";
import UiNavbar from "../components/ui/navbar/UiNavbar";

export const Content = styled.div`
  height: calc(100vh - 64px);
  width: 60%;
  top: 64px;
  background-color: var(--mainbackground-color);
`;

export const BodyWrapper = styled.div`
  margin-top: 200px;
  text-align: center;
`;
export const HeadingThree = styled.h2`
  padding-bottom: 20px;
`;
export const Paragraph = styled.p`
  padding-bottom: 20px;
  font-size: var(--font-size-xl);
`;
export const ButtonTwo = styled.button`
  margin-right: 20px;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: var(--font-size-xl);
  background-color: var(--primary-color);
  color: #f0f0f0;
`;

export const ButtonThree = styled.button`
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
      <UiNavbar />
      <BodyWrapper>
        <HeadingThree>Build Something Amazing</HeadingThree>
        <Paragraph>
          Create beautiful websites with our drag and drop builder
        </Paragraph>
        <ButtonTwo>Get Started</ButtonTwo>
        <ButtonThree>Learn More</ButtonThree>
      </BodyWrapper>
    </Content>
  );
}
