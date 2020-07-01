import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";

import Layout from "../components/layout"
const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allAirtable(
        filter: { table: { eq: "Collaborateur" } }
        sort: { fields: data___Name, order: DESC }
      ) {
        nodes {
          data {
            Name
            Role
            AdresseMail
            Client
          }
          recordId
        }
      }
    }
  `);

  return (
   
    <div>
        <Layout>
        <div>
          <h1>Collaborateur</h1>
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>AdresseMail</th>   
              <th>Client</th> 
            </tr>
          </thead>
          <tbody>
            {data.allAirtable.nodes.map((item,i) => (
              <tr key={item.recordId}>
                <td>{item.data.Name}</td>
                <td>{item.data.Role}</td>
                <td>{item.data.AdresseMail}</td>  
                <td>{item.data.Client}</td>             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/">Go back to the homepage</Link>
      </Layout>
    </div>    
  ); 
};

export default Menu;
       