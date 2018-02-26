import React from "react";
import ChevronDown from "../Partials/ChevronDown.jsx";
import { Wrapper, Range } from "./StyledComponents/PriceRange/index";
import HairSalonListPriceMenu from "./HairSalonListPriceMenu";

const HairSalonListPriceRange = ({
  updatePriceRange,
  priceRange,
  showPriceRange,
  priceRanges,
  isFilterClicked
}) => {
  return (
    <Wrapper onClick={showPriceRange}>
      <Range>Pris {priceRange} kr </Range>
      <ChevronDown />
      <HairSalonListPriceMenu
        updatePriceRange={updatePriceRange}
        isFilterClicked={isFilterClicked}
        priceRanges={priceRanges}
      />
    </Wrapper>
  );
};

export default HairSalonListPriceRange;
