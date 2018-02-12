import React from "react";
import styled from "styled-components";
import ChevronDown from "../Partials/ChevronDown.jsx";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border-top: 1px solid #b69f58;
  border-bottom: 1px solid #b69f58;
  padding: 20px 0px;
`;

const Range = styled.span`
  justify-self: "start";
  padding-left: 10px;
`;

const PriceRange = props => {
  return (
    <Wrapper>
      <Range>Pris 250 - 500 kr</Range>
      <ChevronDown />
    </Wrapper>
  );
};

export default PriceRange;
