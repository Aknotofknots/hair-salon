import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-self: start;
  padding-left: 10px;
`;

const ChevronLeft = () => {
  return (
    <Wrapper>
      <svg
        width="11px"
        height="19px"
        viewBox="0 0 11 19"
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
            transform="translate(-14.000000, -33.000000)"
            stroke="#B69F58"
          >
            <polyline
              id="Path-5"
              points="24.1432489 51.3847763 15 42.1432489 24.1432489 33"
            />
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default ChevronLeft;
