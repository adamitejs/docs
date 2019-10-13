import React from "react";
import { FocusStyleManager } from "@blueprintjs/core";
import { MDXProvider } from "@mdx-js/react";
import Navigation from "./Navigation/Navigation";
import classNames from "classnames";
import classes from "./Layout.module.scss";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../theme/index.scss";
import Code from "./Code";

FocusStyleManager.onlyShowFocusOnTabs();

export default function Layout({ children, location }) {
  return (
    <div className={classNames(classes.layout, "docs")}>
      <Navigation location={location} />

      <MDXProvider
        components={{
          code: props => <Code {...props} />
        }}
      >
        <main>{children}</main>
        <div className="codebar" />
      </MDXProvider>
    </div>
  );
}
