import React from "react";
import { connect } from "react-redux";
import { buyFeature } from "../actions/actions";

const AdditionalFeature = props => {
  const buyFeature = item => {
    props.buyFeature(item);
  };

  console.log(" AdditionalFeature", props);
  return (
    <li>
      <button onClick={buyFeature(props.id)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  buyFeature
};

export default connect(
  null,
  mapDispatchToProps
)(AdditionalFeature);
