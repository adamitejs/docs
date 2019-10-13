import React from "react";
import classes from "./Button.module.scss";

export default function Button({ text }) {
  return <p className={classes.button}>{text}</p>;
}
