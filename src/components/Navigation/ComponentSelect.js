import React from "react"
import {
  Button,
  Popover,
  Menu,
  MenuItem,
  MenuDivider,
  Position,
} from "@blueprintjs/core"
import { navigate } from "gatsby"
import useComponents from "./useComponents"
import classes from "./ComponentSelect.module.scss"

export default function ComponentSelect({ location, menuOpen, onMenuClick }) {
  const components = useComponents()
  const matchingComponent = components.find(
    c => c.path === `/${location.pathname.split("/")[1]}`
  )

  return (
    <div className={classes.componentSelect}>
      <Popover
        minimal
        portalContainer={document.body}
        position={Position.BOTTOM_LEFT}
      >
        <Button
          rightIcon="chevron-down"
          alignText="left"
          text={
            matchingComponent ? matchingComponent.name : "Go to component..."
          }
          fill
          large
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

      <Button
        className={classes.menu}
        icon={menuOpen ? "cross" : "menu"}
        onClick={onMenuClick}
        minimal
        large
      />
    </div>
  )
}
