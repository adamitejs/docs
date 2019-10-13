import React from "react";
import classes from "./Navigation.module.scss";
import ComponentSelect from "./ComponentSelect";
import Title from "./Title";
import useGroups from "./useGroups";
import { Link } from "gatsby";

export default function Navigation({ location }) {
  const groups = useGroups(location);

  return (
    <aside className={classes.navigation}>
      <section>
        <Title />
      </section>
      <section>
        <ComponentSelect location={location} />
      </section>
      <section>
        {groups.map(g => (
          <div className={classes.group} key={g.path}>
            <h3>{g.name}</h3>
            <ul>
              {g.pages.map(p => (
                <li key={p.path}>
                  <Link to={p.path}>{p.name}</Link>
                  {p.subpages && location.pathname.startsWith(p.path) && (
                    <ul>
                      {p.subpages.map(sp => (
                        <li key={sp.path}>
                          <Link to={sp.path}>{sp.name}</Link>
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
