import React from "react";
import { Wrapper, ExtendedWrapper } from "./StyledComponents/RatingsIcon/index";

const RatingsIcon = props => {
  return props.isSalonClicked ? (
    <ExtendedWrapper>
      <svg
        width="58px"
        height="9px"
        viewBox="0 0 58 9"
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
            transform="translate(-68.000000, -169.000000)"
            stroke="#B69F58"
            strokeWidth="0.5"
          >
            <g id="Group-3" transform="translate(68.000000, 169.000000)">
              <polygon
                id="Star-2"
                fill="#B69F58"
                points="4.1500648 6.54545455 1.5851837 7.89389234 2.0750324 5.03785526 4.146683e-14 3.01519857 2.86762425 2.59850838 4.1500648 0 5.43250535 2.59850838 8.3001296 3.01519857 6.2250972 5.03785526 6.7149459 7.89389234"
              />
              <polygon
                id="Star-2-Copy"
                fill="#B69F58"
                points="16.5137012 6.54545455 13.9488201 7.89389234 14.4386688 5.03785526 12.3636364 3.01519857 15.2312606 2.59850838 16.5137012 0 17.7961417 2.59850838 20.663766 3.01519857 18.5887336 5.03785526 19.0785823 7.89389234"
              />
              <polygon
                id="Star-2-Copy-2"
                fill="#B69F58"
                points="28.8773375 6.54545455 26.3124564 7.89389234 26.8023051 5.03785526 24.7272727 3.01519857 27.594897 2.59850838 28.8773375 0 30.1597781 2.59850838 33.0274023 3.01519857 30.9523699 5.03785526 31.4422186 7.89389234"
              />
              <polygon
                id="Star-2-Copy-3"
                fill="#B69F58"
                points="41.2409739 6.54545455 38.6760928 7.89389234 39.1659415 5.03785526 37.0909091 3.01519857 39.9585333 2.59850838 41.2409739 0 42.5234144 2.59850838 45.3910387 3.01519857 43.3160063 5.03785526 43.805855 7.89389234"
              />
              <polygon
                id="Star-2-Copy-4"
                points="53.6046103 6.54545455 51.0397292 7.89389234 51.5295779 5.03785526 49.4545455 3.01519857 52.3221697 2.59850838 53.6046103 0 54.8870508 2.59850838 57.7546751 3.01519857 55.6796427 5.03785526 56.1694914 7.89389234"
              />
            </g>
          </g>
        </g>
      </svg>
    </ExtendedWrapper>
  ) : (
    <Wrapper>
      <svg
        width="58px"
        height="9px"
        viewBox="0 0 58 9"
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
            transform="translate(-68.000000, -169.000000)"
            stroke="#B69F58"
            strokeWidth="0.5"
          >
            <g id="Group-3" transform="translate(68.000000, 169.000000)">
              <polygon
                id="Star-2"
                fill="#B69F58"
                points="4.1500648 6.54545455 1.5851837 7.89389234 2.0750324 5.03785526 4.146683e-14 3.01519857 2.86762425 2.59850838 4.1500648 0 5.43250535 2.59850838 8.3001296 3.01519857 6.2250972 5.03785526 6.7149459 7.89389234"
              />
              <polygon
                id="Star-2-Copy"
                fill="#B69F58"
                points="16.5137012 6.54545455 13.9488201 7.89389234 14.4386688 5.03785526 12.3636364 3.01519857 15.2312606 2.59850838 16.5137012 0 17.7961417 2.59850838 20.663766 3.01519857 18.5887336 5.03785526 19.0785823 7.89389234"
              />
              <polygon
                id="Star-2-Copy-2"
                fill="#B69F58"
                points="28.8773375 6.54545455 26.3124564 7.89389234 26.8023051 5.03785526 24.7272727 3.01519857 27.594897 2.59850838 28.8773375 0 30.1597781 2.59850838 33.0274023 3.01519857 30.9523699 5.03785526 31.4422186 7.89389234"
              />
              <polygon
                id="Star-2-Copy-3"
                fill="#B69F58"
                points="41.2409739 6.54545455 38.6760928 7.89389234 39.1659415 5.03785526 37.0909091 3.01519857 39.9585333 2.59850838 41.2409739 0 42.5234144 2.59850838 45.3910387 3.01519857 43.3160063 5.03785526 43.805855 7.89389234"
              />
              <polygon
                id="Star-2-Copy-4"
                points="53.6046103 6.54545455 51.0397292 7.89389234 51.5295779 5.03785526 49.4545455 3.01519857 52.3221697 2.59850838 53.6046103 0 54.8870508 2.59850838 57.7546751 3.01519857 55.6796427 5.03785526 56.1694914 7.89389234"
              />
            </g>
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default RatingsIcon;