import { useStaticQuery, graphql } from "gatsby";

export default function useComponents() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          components {
            path
            name
            type
            title
            version
          }
        }
      }
    }
  `);

  return data.site.siteMetadata.components;
}
