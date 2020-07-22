import React from "react"
import {Link} from "gatsby"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"


const ComponentName = ({ data: {client: {data: {Adresse_client, Client_name, Code_postal, Collaborateur_2}}} }) => {
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
                        <th>Code postal</th>
                        <th>Collaborateur</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{Client_name}</td>
                        <td>{Adresse_client}</td>
                        <td>{Code_postal}</td>
                        <td>{Collaborateur_2}</td>
                    </tr>
                    </tbody>
                </table>


                <section>
                    <h2>Silver Stacking Ring</h2>
                    <p>$19.99</p>
                    <p>Wear one or seventeen! These rings are fun to mix and match.</p>
                    <button
                        className="snipcart-add-item"
                        data-item-id="silver-stacking-ring"
                        data-item-price="19.99"
                        data-item-url="/"
                        data-item-name="Silver Stacking Ring"
                        data-item-custom1-name="Size"
                        data-item-custom1-options="6|6.5|7|7.5|8|8.5|9"
                        data-item-custom2-name="This is a gift" data-item-custom2-type="checkbox"
                    >
                        Add to cart
                    </button>
                </section>
                <button className="snipcart-checkout">View Cart</button>


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
                Code_postal
                Collaborateur_2
            }
        }
    }
`

export default ComponentName
