import { DownloadIcon, DropDown, EyeIcon } from "../../icon/Icon";
import { ButtonWrapper, ExportButton, HeadingOne, NavbarWrapper, PreviewButton } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <HeadingOne>Theme-Studio</HeadingOne>
      <ButtonWrapper>
        <PreviewButton> <EyeIcon color="none"/> Preview</PreviewButton>
        <ExportButton> <DownloadIcon size={18}/> Export<DropDown /></ExportButton>
      </ButtonWrapper>
    </NavbarWrapper>
  );
};
export default Navbar;
