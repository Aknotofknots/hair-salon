import React from "react";
import Settings from "../Partials/Settings";
import ChevronLeft from "../Partials/ChevronLeft";
import styled from "styled-components";

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: lighter;
`;

const Header = () => (
  <Wrapper>
    <ChevronLeft />
    <Heading>Hår</Heading>
    <Settings />
  </Wrapper>
);

export default Header;
