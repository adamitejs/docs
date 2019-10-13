import { useStaticQuery, graphql } from "gatsby";

export default function useGroups(location) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          components {
            path
            groups {
              path
              name
              pages {
                path
                name
                subpages {
                  path
                  name
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.site.siteMetadata.components.find(
    c => c.path === `/${location.pathname.split("/")[1]}`
  ).groups;
}
