import React from "react";
import {
  Button,
  Popover,
  Menu,
  MenuItem,
  MenuDivider
} from "@blueprintjs/core";
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
          text={
            matchingComponent ? matchingComponent.name : "Go to component..."
          }
          fill
        />
        <Menu large>
          {components.map(c =>
            c.type === "divider" ? (
              <MenuDivider title={c.title} />
            ) : (
              <MenuItem
                key={c.path}
                onClick={() => navigate(c.path)}
                text={c.name}
                label={c.version && `v${c.version}`}
              />
            )
          )}
        </Menu>
      </Popover>

      {matchingComponent && matchingComponent.version && (
        <p>
          <span>v{matchingComponent.version}</span>
        </p>
      )}
    </div>
  );
}
