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
      <Popover minimal position={Position.BOTTOM_LEFT}>
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
                active={matchingComponent && matchingComponent.path === c.path}
              />
            )
          )}
        </Menu>
      </Popover>

      {matchingComponent && matchingComponent.version && (
        <Popover minimal position={Position.BOTTOM_RIGHT}>
          <p className={classes.version}>
            <span>v{matchingComponent.version}</span>
          </p>
          <Menu>
            <MenuItem text={`v${matchingComponent.version}`} active />
          </Menu>
        </Popover>
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
