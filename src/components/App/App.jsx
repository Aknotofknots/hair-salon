import React, { Component, Fragment } from "react";
import Header from "../List/Header.jsx";
import List from "../List/List.jsx";
import ListItem from "../List/ListItem.jsx";
import PriceRange from "../List/PriceRange.jsx";
import config from "../../config/config";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <PriceRange />
        <List>
          {config.hairSalons.map(hairSalon => {
            return <ListItem key={hairSalon.salonName} hairSalon={hairSalon} />;
          })}
        </List>
      </Fragment>
    );
  }
}

export default App;
