import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
`;
export const HeadingTwo = styled.h2`
  color: var(--primary-color);
`;
export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: 220px;
`;
export const MainComponentNav = styled.li`
  &:hover {
    cursor: pointer;
  }
`;
export const ButtonOne = styled.button`
  margin-left: 150px;
  padding: 6px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: var(--font-size-xm);
  background-color: var(--primary-color);
  color: #f0f0f0;
`;