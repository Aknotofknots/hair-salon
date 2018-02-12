import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-self: end;
  padding-right: 10px;
`;

const ChevronDown = () => {
  return (
    <Wrapper>
      <svg
        width="12px"
        height="7px"
        viewBox="0 0 12 7"
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
            transform="translate(-348.000000, -87.000000)"
            stroke="#B69F58"
          >
            <polyline
              id="Path-2-Copy-4"
              transform="translate(353.839435, 90.455857) rotate(90.000000) translate(-353.839435, -90.455857) "
              points="351.446027 85 356.67887 90.2328434 351 95.9117134"
            />
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default ChevronDown;
