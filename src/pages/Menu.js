import React from 'react';
import { graphql } from 'gatsby';
import { Link } from "gatsby";

import Layout from "../components/layout"
const Menu = () => {
  const data = (graphql`
    query MenuQuery {
      Collaborateur: allAirtable(
        filter: { table: { eq: "Collaborateur" } }
        sort: { fields: data___Name, order: DESC }
      ) {
        nodes {
          data {
            Name
            Role
            AdresseMail
          }
          recordId
        }
      }
    }
  `);

  return (
   
    <div>
        <Layout>
      <h3>Collaborateur</h3>

      <ul>
        {data.Collaborateur.nodes.map((item, i) => (
          <li key={item.recordId}>
            <p>
              {item.data.Name} {item.data.Role}
            </p>
            <p>{item.data.AdresseMail}</p>
          </li>
        ))}
      </ul>
      <Link to="/">Go back to the homepage</Link>
      </Layout>
    </div>
    
  );
 
};

export default Menu;