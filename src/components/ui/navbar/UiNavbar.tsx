import React from "react";
import { ButtonOne, HeadingTwo, MainComponentNav, MainWrapper, Navbar } from "./UiNavbar.styles";

const UiNavbar: React.FC = () => {
  return (
    <MainWrapper>
      <HeadingTwo>Brand</HeadingTwo>
      <Navbar>
        <MainComponentNav>Home</MainComponentNav>
        <MainComponentNav>About Us</MainComponentNav>
        <MainComponentNav>Features</MainComponentNav>
        <MainComponentNav>Contact</MainComponentNav>
      </Navbar>
      <ButtonOne>Get Started</ButtonOne>
    </MainWrapper>
  );
};
export default UiNavbar;
