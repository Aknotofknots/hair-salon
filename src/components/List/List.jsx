import React from "react";
import styled from "styled-components";

const HairSalonList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const List = ({ children }) => <HairSalonList>{children}</HairSalonList>;

export default List;
