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
  color:var(--primary-color);
  font-weight: 800px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
  justify-content: center;

`;
export const PreviewButton = styled.button`
  padding: 8px 12px;
  font-size: var(--font-size-sm);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
 
`;
export const ExportButton = styled.button`
  padding: 8px 12px;
  display: flex;
  font-size: var(--font-size-sm);
  margin: 0px 0px 0px 10px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: var(--primary-color);
  color: white;
`;
