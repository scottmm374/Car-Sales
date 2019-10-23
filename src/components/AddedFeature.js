import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/actions";

// Removing Features
const AddedFeature = props => {
  const removeFeature = item => {
    props.removeFeature(item.id);
  };

  console.log("AddedFeature", props);
  return (
    <li>
      <button onClick={removeFeature(props.item.id)} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// function mapStateToProps(state) {
//   return {
//     features: state.
//   }

// }

const mapDispatchToProps = {
  removeFeature
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(AddedFeature);
