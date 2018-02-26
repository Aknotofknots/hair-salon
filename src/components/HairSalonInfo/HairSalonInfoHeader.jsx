import React from "react";
import salonImage from "../../images/Hair_Salon_Info.png";

import HeartIcon from "../Partials/HeartIcon";
import ChevronLeftWhite from "../Partials/ChevronLeftWhite";
import HairSalonInfoName from "./HairSalonInfoName";
import { Wrapper, SalonImage } from "./StyledComponents/Header/index";

const HairSalonInfoHeader = ({
  salonName,
  isSalonClicked,
  handleViewChange
}) => {
  return (
    <React.Fragment>
      <Wrapper>
        <SalonImage src={salonImage} />
        <ChevronLeftWhite handleViewChange={handleViewChange} />
        <HeartIcon />
        <HairSalonInfoName
          salonName={salonName}
          isSalonClicked={isSalonClicked}
        />
      </Wrapper>
    </React.Fragment>
  );
};

export default HairSalonInfoHeader;
