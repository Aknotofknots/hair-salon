import React from "react";
import Wrapper from "./StyledComponents/ChevronLeftWhite/index";

const ChevronLeftWhite = ({ handleViewChange }) => {
  return (
    <Wrapper onClick={handleViewChange}>
      <svg
        width="18px"
        height="27px"
        viewBox="0 0 18 27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          id="path-1"
          points="24.1432489 51.3847763 15 42.1432489 24.1432489 33"
        />
        <filter
          x="-82.0%"
          y="-29.9%"
          width="264.1%"
          height="181.6%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feMorphology
            radius="0.5"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="0"
            dy="2"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="shadowInner"
          />
          <feOffset dx="0" dy="2" in="shadowInner" result="shadowInner" />
          <feComposite
            in="shadowOffsetOuter1"
            in2="shadowInner"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>

        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="En-Salong" transform="translate(-10.000000, -31.000000)">
            <g id="Path-5">
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-2)"
                href="#path-1"
              />
              <use stroke="white" strokeWidth="1" href="#path-1" />
            </g>
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default ChevronLeftWhite;
