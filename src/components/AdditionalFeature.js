import React from "react";

const AdditionalFeature = props => {
  console.log(" AdditionalFeature", props);

  return (
    <li>
      <button
        onClick={() => props.buyFeature(props.feature)}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
