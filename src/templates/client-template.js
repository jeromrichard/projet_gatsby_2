import React from "react"
import {Link} from "gatsby"
import {useStaticQuery, graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"


const ComponentName = ({ data: {client: {data: {Adresse_client, Client_name}}} }) => {
    return <div>
        <Layout>
            <div>
                <SEO title="Page client"/>
                <h1>Client</h1>
                <table>
                    <thead>
                    <tr>
                        <th style={{color: `red`}}>Name</th>
                        <th>Adresse</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{Client_name}</td>
                        <td>{Adresse_client}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p><Link to="/Menu/">Go back to Collaborateur</Link></p>

            <p><Link to="/">Go back to the homepage</Link></p>
        </Layout>
    </div>
}

export const query = graphql`
    query GetSingleClient($slug: String) {
        client: airtable(data: {Slug: {eq: $slug}}) {
            id
            data {
                Client_name
                Adresse_client
            }
        }
    }
`

export default ComponentName
