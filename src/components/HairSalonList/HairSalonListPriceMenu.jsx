import React from "react";
import Menu, { MenuItem } from "./StyledComponents/PriceMenu/index";

const HairSalonListPriceMenu = ({
  isFilterClicked,
  priceRanges,
  updatePriceRange
}) => {
  return (
    <Menu isFilterClicked={isFilterClicked}>
      {priceRanges.map((priceRange, position) => {
        return (
          <MenuItem onClick={updatePriceRange} key={priceRange}>
            {priceRange}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default HairSalonListPriceMenu;
