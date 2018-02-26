import React from "react";
import { Wrapper, SalonName } from "./StyledComponents/Header/SalonName/index";
import Ratings from "../Partials/RatingsIcon";

const HairSalonInfoName = ({ salonName, isSalonClicked }) => {
  return (
    <Wrapper>
      <SalonName>{salonName}</SalonName>
      <br />
      <Ratings isSalonClicked={isSalonClicked} />
    </Wrapper>
  );
};

export default HairSalonInfoName;
