import { Link } from "@tanstack/react-router";
import { DownloadIcon, DropDown, EyeIcon } from "../../icon/Icon";
import {
  ButtonWrapper,
  ExportButton,
  HeadingOne,
  NavbarWrapper,
  PreviewButton,
} from "./Navbar.styles";

const Navbar: React.FC = () => {
  
  return (
    <NavbarWrapper>
      <Link to="/" >
        <HeadingOne>Theme-Studio</HeadingOne>
      </Link>

      <ButtonWrapper>
        <Link to="/preview"  target="_blank">
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
