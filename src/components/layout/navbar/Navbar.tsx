import { DropDown, EyeIcon } from "../../icon/Icon";
import { ButtonWrapper, ExportButton, HeadingOne, NavbarWrapper, PreviewButton } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <HeadingOne>Theme-Studio</HeadingOne>
      <ButtonWrapper>
        <PreviewButton> <EyeIcon color="white" /> Preview</PreviewButton>
        <ExportButton>Export<DropDown /></ExportButton>
      </ButtonWrapper>
    </NavbarWrapper>
  );
};
export default Navbar;
