import React from "react";
import { Button, Popover, Menu, MenuItem } from "@blueprintjs/core";
import { navigate } from "gatsby";
import useComponents from "./useComponents";
import classes from "./ComponentSelect.module.scss";

export default function ComponentSelect({ location }) {
  const components = useComponents();
  const matchingComponent = components.find(
    c => c.path === `/${location.pathname.split("/")[1]}`
  );

  return (
    <div className={classes.componentSelect}>
      <Popover>
        <Button
          rightIcon="chevron-down"
          alignText="left"
          text={matchingComponent ? matchingComponent.name : "Go to..."}
          fill
        />
        <Menu large>
          {components.map(c => (
            <MenuItem
              key={c.path}
              onClick={() => navigate(c.path)}
              text={c.name}
              label={`v${c.version}`}
            />
          ))}
        </Menu>
      </Popover>

      <p>
        <span>v{matchingComponent.version}</span>
      </p>
    </div>
  );
}
