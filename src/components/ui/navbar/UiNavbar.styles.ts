import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 64px;
  width: 100%;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);

  @media();
`;
export const HeadingTwo = styled.h2`
  color: var(--primary-color);
`;
export const Navbar = styled.ul`
  list-style-type: none;
  display: none;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const HamButton = styled.button`
  display: block;
  border: none;

  @media (min-width: 992px) {
    display: none;
  }
`;
export const MainComponentNav = styled.li`
  &:hover {
    cursor: pointer;
  }
`;
export const ButtonOne = styled.button`
  padding: 8px;
  display: none;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: var(--font-size-sm);
  background-color: var(--primary-color);
  color: #f0f0f0;

  @media (min-width: 992px) {
    display: block;
  }
`;
