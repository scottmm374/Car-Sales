import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { removeFeature, buyFeature } from "./actions/actions";

const App = props => {
  console.log("app", props);

  const buyFeature = item => {
    props.buyFeature(item);
  };

  const removeFeature = item => {
    props.removeFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          buyFeature={buyFeature}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  };
}

const mapDispatchToProps = {
  buyFeature,
  removeFeature
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
