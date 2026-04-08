import React from "react";
import { ButtonOne, HamButton, HeadingTwo, MainComponentNav, MainWrapper, Navbar } from "./UiNavbar.styles";
import { HamBurgerIcon } from "../../icon/Icon";

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
      <HamButton>
        <HamBurgerIcon />
      </HamButton>
      
    </MainWrapper>
  );
};
export default UiNavbar;
