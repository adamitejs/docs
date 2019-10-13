import React, { useState } from "react";
import { Link } from "gatsby";
import ComponentSelect from "./ComponentSelect";
import Title from "./Title";
import useGroups from "./useGroups";
import classNames from "classnames";
import classes from "./Navigation.module.scss";

export default function Navigation({ location }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const groups = useGroups(location);

  return (
    <aside
      className={classNames(classes.navigation, { [classes.open]: menuOpen })}
    >
      <section className={classes.title}>
        <Title />
      </section>

      <section>
        <ComponentSelect
          menuOpen={menuOpen}
          location={location}
          onMenuClick={() => setMenuOpen(!menuOpen)}
        />
      </section>

      <section>
        {groups.map(g => (
          <div className={classes.group} key={g.path}>
            <h3>{g.name}</h3>
            <ul>
              {g.pages.map(p => (
                <li key={p.path}>
                  <Link onClick={() => setMenuOpen(false)} to={p.path}>
                    {p.name}
                  </Link>
                  {p.subpages && location.pathname.startsWith(p.path) && (
                    <ul>
                      {p.subpages.map(sp => (
                        <li key={sp.path}>
                          <Link onClick={() => setMenuOpen(false)} to={sp.path}>
                            {sp.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </aside>
  );
}
