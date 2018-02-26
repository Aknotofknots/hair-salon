import styled from "styled-components";

const Menu = styled.div`
  background-color: grey;
  grid-column: 1/-1;
  font-size: 14px;
  text-align: center;
  padding: 5px;
  transition: all 0.4s ease-in-out;
  transform: ${({ isFilterClicked }) =>
    isFilterClicked ? "translateX(0px)" : "translateX(-500px)"};
  opacity: ${({ isFilterClicked }) => (isFilterClicked ? "1" : "0")};
`;

export const MenuItem = styled.span`
  text-decoration: underline #b69f58;
  display: inline-block;
  padding: 5px;
  margin: 5px;
  color: white;
`;

export default Menu;
