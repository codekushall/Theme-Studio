import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  height: 64px;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  align-items: center;
  background-color:#ffffff;
  z-index:1000;
`;
export const HeadingOne = styled.h1`
  font-weight: 800;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
  justify-content: center;

`;
export const PreviewButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 800;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
export const ExportButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 800;
  border: 1px solid;
  margin: 0px 0px 0px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:2px;
`;
