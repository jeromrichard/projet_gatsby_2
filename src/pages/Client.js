import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Menu = () => {
    const data = useStaticQuery(graphql`
      query menuQueryandMenuQuery {
        allAirtable(
          filter: { table: { eq: "Client" } }
          sort: { fields: data___Name, order: DESC }
        ) {
          nodes {
            data {
              Name
              Adresse_client
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
          <SEO title="Page client" />
            <h1>Client</h1>
            <table>
            <thead>
              <tr>
                <th style={{ color: `red` }}>Name</th>   
                 
                <th>Adresse</th> 
              </tr>
            </thead>
            <tbody>
              {data.allAirtable.nodes.map((item,i) => (
                <tr key={item.recordId}>
                  <td>{item.data.Name}</td>                  
                  <td>{item.data.Adresse_client}</td>        
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/Menu/">Go back to Collaborateur</Link>
        </Layout>
      </div>    
    ); 
  };
  
  export default Menu;


