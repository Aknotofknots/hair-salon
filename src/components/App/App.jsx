import React, { Component, Fragment } from "react";

import HairSalonList from "../HairSalonList/HairSalonList";
import HairSalonListHeader from "../HairSalonList/HairSalonListHeader";
import HairSalonListItem from "../HairSalonList/HairSalonListItem";
import HairSalonListPriceRange from "../HairSalonList/HairSalonListPriceRange";

import HairSalonInfo from "../HairSalonInfo/HairSalonInfo";
import HairSalonInfoHeader from "../HairSalonInfo/HairSalonInfoHeader";
import HairSalonInfoContent from "../HairSalonInfo/HairSalonInfoContent";

import config from "../../config/config";

class App extends Component {
  state = {
    isSalonClicked: false,
    isFilterClicked: false,
    salon: {},
    priceRange: "250 - 500"
  };

  handleViewChange = salon => {
    this.setState({ isSalonClicked: !this.state.isSalonClicked, salon });
  };

  getSalon = salon => {
    this.setState({ salon });
  };

  showPriceRange = () => {
    this.setState({ isFilterClicked: !this.state.isFilterClicked });
  };

  updatePriceRange = e => {
    const priceRange = e.currentTarget.textContent;
    this.setState({ priceRange });
  };

  filterSalonsByPriceRange = () => {
    return config.hairSalons.filter(hairSalon => {
      const [minPrice, maxPrice] = this.state.priceRange.split(" - ");
      const priceWithinRange = hairSalon.prices.filter(
        price => price >= minPrice && price <= maxPrice
      );
      if (priceWithinRange.length > 0) {
        return hairSalon;
      }
    });
  };

  extractSalon = e => {
    config.hairSalons.map(salon => {
      if (e.currentTarget.textContent.includes(salon.salonName)) {
        this.handleViewChange();
        this.getSalon(salon);
      }
    });
  };

  render() {
    const salonsWithinRange = this.filterSalonsByPriceRange();
    return !this.state.isSalonClicked ? (
      <Fragment>
        <HairSalonListHeader />
        <HairSalonListPriceRange
          priceRange={this.state.priceRange}
          priceRanges={config.priceRanges}
          updatePriceRange={this.updatePriceRange}
          showPriceRange={this.showPriceRange}
          isFilterClicked={this.state.isFilterClicked}
        />
        <HairSalonList>
          {salonsWithinRange.map(hairSalon => {
            return (
              <HairSalonListItem
                extractSalon={this.extractSalon}
                hairSalon={hairSalon}
                priceRange={this.state.priceRange}
                handleViewChange={this.handleViewChange}
                key={hairSalon.salonName}
              />
            );
          })}
        </HairSalonList>
      </Fragment>
    ) : (
      <HairSalonInfo>
        <HairSalonInfoHeader
          handleViewChange={this.handleViewChange}
          isSalonClicked={this.state.isSalonClicked}
          salonName={this.state.salon.salonName}
        />
        <HairSalonInfoContent
          salon={this.state.salon}
          isSalonClicked={this.state.isSalonClicked}
        />
      </HairSalonInfo>
    );
  }
}

export default App;
