import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  // this will remove an item from the features[]
  // const removeFeature = item => {
  //   props.removeFeature();
  //   // dispatch an action here to remove an item
  // };

  // this will add an item from additionalFeatures[{}] to the features []
  const buyItem = item => {
    props.buyFeature();
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
