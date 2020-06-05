import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Menu = () => {
  const data = useStaticQuery(graphql`
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
    </div>
    
  );
};

export default Menu;