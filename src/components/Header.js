import React from "react";
import { connect } from "react-redux";

const Header = props => {
  // console.log("Header", props);
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

function mapStateToProps(state) {
  return {};
}
export default connect(
  mapStateToProps,
  null
)(Header);
