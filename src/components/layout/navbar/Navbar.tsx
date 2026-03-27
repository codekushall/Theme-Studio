import { ExportButton, HeadingOne, NavbarWrapper, PreviewButton } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <HeadingOne>Theme-Studio</HeadingOne>
      <div>
        <PreviewButton>Preview</PreviewButton>
        <ExportButton>Export</ExportButton>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;
