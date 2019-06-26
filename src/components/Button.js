import React, { Component } from "react";
import "../App.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

/*
class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`button-wrapper ${
          isOperator(props.children) ? null : "operator"
        }`}
        onClick={() => props.handleClick(props.children)}
      >
        {props.children}
      </div>
    );
  }
}

export default Button;
*/
