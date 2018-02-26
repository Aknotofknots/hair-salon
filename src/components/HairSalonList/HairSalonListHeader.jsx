import React from "react";
import SettingsIcon from "../Partials/SettingsIcon";
import ChevronLeft from "../Partials/ChevronLeft";
import { Wrapper, Heading } from "./StyledComponents/Header/index";

const HairSalonListHeader = () => (
  <Wrapper>
    <ChevronLeft />
    <Heading>Hår</Heading>
    <SettingsIcon />
  </Wrapper>
);

export default HairSalonListHeader;
