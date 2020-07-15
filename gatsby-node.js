/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// Create pages dynamically

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
    query getClients {
          clients:allAirtable(filter: {table: {eq: "Client"}}) {
            nodes {
              data {
                Slug
              }
            }
          }
        }
    `)
    result.data.clients.nodes.forEach((client)=> {
        createPage({
            path:`/Client/${client.data.Slug}`,
            component: path.resolve(`src/templates/client-template.js`),
            context: {
                slug: client.data.Slug
            }
        })
    })
}
