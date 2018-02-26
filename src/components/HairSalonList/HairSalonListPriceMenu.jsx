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
          <MenuItem
            className={`drop-down-item${position + 1}`}
            onClick={updatePriceRange}
            key={priceRange}
          >
            {priceRange}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default HairSalonListPriceMenu;
