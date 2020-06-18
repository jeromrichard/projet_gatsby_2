import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import Layout from "../components/layout"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
  query menuQueryAndMenuQuery {
    Site_web: allAirtable (
      filter: { table: { eq: "Site web" } }
      sort: { fields: data___Nom_du_site, order: DESC }
    ) {
        nodes {
          data { 
            Nom_du_site
            Blogposts         
            Categories
          }
          recordId
        }
      }
    }
  `);
  return (
  <div>
    <layout>
        {data.Site_web.nodes.map((item, i) => (
          <li key={item.recordId}>
          <p>
              {item.data.Nom_du_site} {item.data.Blogposts}
            </p>
          <p>{item.data.Categories}</p>
            
          </li>
        ))} 
      <Link to="/">Go back to the homepage</Link>  
      </layout>   
  </div>
  );  
};


export default ComponentName
