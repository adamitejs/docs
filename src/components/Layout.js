import React from "react";
import Div100vh from "react-div-100vh";
import { FocusStyleManager, Button } from "@blueprintjs/core";
import { MDXProvider } from "@mdx-js/react";
import Navigation from "./Navigation/Navigation";
import Code from "./Code";
import classNames from "classnames";
import changeCase from "change-case";
import classes from "./Layout.module.scss";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../theme/index.scss";

FocusStyleManager.onlyShowFocusOnTabs();

export default function Layout({ children, location }) {
  async function copyToClipboard(id) {
    if (typeof window !== "undefined") {
      window.location.hash = id;
    }

    const result = await navigator.permissions.query({
      name: "clipboard-write",
    });

    if (result.state !== "granted" && result.state !== "prompt") return;
    await navigator.clipboard.writeText(`${location.href}#${id}`);
  }
  return (
    <Div100vh className={classNames(classes.layout, "docs")}>
      <Navigation location={location} />

      <MDXProvider
        components={{
          code: props => <Code {...props} />,
          h1: props => (
            <h1
              {...props}
              style={{ ...props.style, position: "relative" }}
              id={changeCase.paramCase(props.children)}
            >
              {props.children}

              <div className={classes.headerLink}>
                <Button
                  minimal
                  small
                  icon="link"
                  onClick={() =>
                    copyToClipboard(changeCase.paramCase(props.children))
                  }
                />
              </div>
            </h1>
          ),
          h2: props => (
            <h2
              {...props}
              style={{ ...props.style, position: "relative" }}
              id={changeCase.paramCase(props.children)}
            >
              {props.children}

              <div className={classes.headerLink}>
                <Button
                  minimal
                  small
                  icon="link"
                  onClick={() =>
                    copyToClipboard(changeCase.paramCase(props.children))
                  }
                />
              </div>
            </h2>
          ),
          h3: props => (
            <h3
              {...props}
              style={{ ...props.style, position: "relative" }}
              id={changeCase.paramCase(props.children)}
            >
              {props.children}

              <div className={classes.headerLink}>
                <Button
                  minimal
                  small
                  icon="link"
                  onClick={() =>
                    copyToClipboard(changeCase.paramCase(props.children))
                  }
                />
              </div>
            </h3>
          ),
        }}
      >
        <main>{children}</main>
        <div className="codebar" />
      </MDXProvider>
    </Div100vh>
  );
}
