import {  Border, HeadingFour, NavList, UnorderList } from "./LeftSidebar.styles";

const LeftSideBar: React.FC = () => {
  return (
    <Border>
      <HeadingFour>COMPONENTS</HeadingFour>
      <UnorderList>
        <NavList>Navbar</NavList>
        <NavList>Hero</NavList>
        <NavList>Features</NavList>
        <NavList>CTA</NavList>
        <NavList>Footer</NavList>
      </UnorderList>
    </Border>
  );
};
export default LeftSideBar;
