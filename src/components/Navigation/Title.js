import React from "react";
import { Link } from "gatsby";
import classes from "./Title.module.scss";

export default function Title() {
  return (
    <div className={classes.title}>
      <Link to="/">
        <p>Adamite</p>
      </Link>
    </div>
  );
}
