import React from "react";

import LocationIcon from "../Partials/LocationIcon";
import ClockIcon from "../Partials/ClockIcon";
import PhoneIcon from "../Partials/PhoneIcon";
import WebIcon from "../Partials/WebIcon";
import ChevronDown from "../Partials/ChevronDown";
import {
  Wrapper,
  SalonInfo,
  SalonSchema,
  UnderLine,
  Address,
  WebAddress,
  Open,
  Contact,
  Info
} from "./StyledComponents/Content/index";

const HairSalonInfoContent = ({ salon, isSalonClicked }) => {
  return (
    <Wrapper>
      <SalonInfo>Info</SalonInfo>
      <SalonSchema>Schema</SalonSchema>
      <UnderLine />
      <Address>
        <LocationIcon /> {salon.streetAddress}
      </Address>

      <Open>
        <ClockIcon /> {salon.openHours} idag
        <ChevronDown isSalonClicked={isSalonClicked} />
      </Open>

      <Contact>
        <PhoneIcon /> 08-4365656776
      </Contact>

      <WebAddress>
        <WebIcon /> www.{salon.salonName.toLowerCase()}.com
      </WebAddress>

      <Info>
        Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. t feugiat
        nunc porttitor volut pat, acu quis torquent iaculis ultricies massa,
        duis nun quis que amet.
      </Info>
    </Wrapper>
  );
};

export default HairSalonInfoContent;
