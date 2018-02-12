import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  margin-left: 15px;
`;

const ChevronRight = () => (
  <Wrapper>
    <svg
      width="8px"
      height="11px"
      viewBox="0 0 8 11"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Lista"
          transform="translate(-353.000000, -165.000000)"
          stroke="#B69F58"
        >
          <polyline
            id="Path-2-Copy"
            points="354.446027 165 359.67887 170.232843 354 175.911713"
          />
        </g>
      </g>
    </svg>
  </Wrapper>
);

export default ChevronRight;
