import React from "react";
import { buyFeature } from "../actions/actions";

const AdditionalFeature = props => {
  console.log(" AdditionalFeature", props);

  return (
    <li>
      <button onClick={() => buyFeature(props.feature)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
