import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import Layout from "../components/layout"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable {
        nodes {
          data {          
            Categories
          }
        }
      }
    }
  `);
  return (
<div>
    <Layout>
        <ul>
        {data.Site_web.nodes.map((item, i) => (
          
         <p>{item.data.Categories}</p>))}
        </ul>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
</div>

  );
};


export default ComponentName
