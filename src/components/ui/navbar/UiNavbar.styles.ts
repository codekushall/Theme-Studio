import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
`;
export const HeadingTwo = styled.h2`
margin-left:20px;
  color: var(--primary-color);
`;
export const Navbar = styled.ul`
  list-style-type: none; 
   margin-left: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

`;
export const MainComponentNav = styled.li`
  &:hover {
    cursor: pointer;
  }
`;
export const ButtonOne = styled.button`
  margin-left: 150px;
  margin-right:20px;
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: var(--font-size-xm);
  background-color: var(--primary-color);
  color: #f0f0f0;
`;
