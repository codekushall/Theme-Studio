import { DropDown, EyeIcon } from "../../icon/Icon";
import { ExportButton, HeadingOne, NavbarWrapper, PreviewButton } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <HeadingOne>Theme-Studio</HeadingOne>
      <div>
        <PreviewButton> <EyeIcon color="none"/> Preview</PreviewButton>
        <ExportButton>Export<DropDown /></ExportButton>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;
