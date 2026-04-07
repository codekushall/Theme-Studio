import { Link } from "@tanstack/react-router";
import { DownloadIcon, DropDown, EyeIcon } from "../../icon/Icon";
import {
  ButtonWrapper,
  ExportButton,
  HeadingOne,
  NavbarWrapper,
  PreviewButton,
} from "./Navbar.styles";

interface HeaderProps {
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<HeaderProps> = ({ isPreview, setIsPreview }) => {
  console.log(isPreview)
  return (
    <NavbarWrapper>
      <Link to="/">
        <HeadingOne>Theme-Studio</HeadingOne>
      </Link>

      <ButtonWrapper>
        <Link to="/preview" target="_blank" onClick={() => setIsPreview(true)}>
          <PreviewButton>
            {" "}
            <EyeIcon color="none" /> Preview
          </PreviewButton>
        </Link>

        <ExportButton>
          {" "}
          <DownloadIcon /> Export
          <DropDown />
        </ExportButton>
      </ButtonWrapper>
    </NavbarWrapper>
  );
};
export default Navbar;
