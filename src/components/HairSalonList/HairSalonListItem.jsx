import React, { Component } from "react";
import RatingsIcon from "../Partials/RatingsIcon.jsx";
import ChevronRight from "../Partials/ChevronRight.jsx";
import {
  Wrapper,
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  SalonName,
  StreetAddress,
  Ratings,
  HaircutDuration,
  DividingLine
} from "./StyledComponents/ListItem";

class HairSalonListItem extends Component {
  getCurrentPrice = hairSalon => {
    const [minPrice, middlePrice, maxPrice] = hairSalon.prices;
    const { priceRange } = this.props;

    switch (priceRange) {
      case "250 - 500":
        return minPrice;
      case "500 - 1000":
        return middlePrice;
      case "1000 - 1500":
        return maxPrice;
      default:
        return priceRange;
    }
  };

  render() {
    const { hairSalon, extractSalon } = this.props;
    return (
      <React.Fragment>
        <Wrapper onClick={extractSalon}>
          <ColumnOne>{hairSalon.availableHours}</ColumnOne>
          <ColumnTwo>
            <SalonName>{hairSalon.salonName}</SalonName>
            <br />
            <RatingsIcon />
            <Ratings>{`  (${hairSalon.ratings})`}</Ratings>
            <br />
            <StreetAddress>{hairSalon.streetAddress}</StreetAddress>
          </ColumnTwo>

          <ColumnThree>
            {this.getCurrentPrice(hairSalon)} kr
            <br />
            <HaircutDuration>
              {hairSalon.haircutDuration} min
              <ChevronRight />
            </HaircutDuration>
          </ColumnThree>
        </Wrapper>
        <DividingLine />
      </React.Fragment>
    );
  }
}

export default HairSalonListItem;
