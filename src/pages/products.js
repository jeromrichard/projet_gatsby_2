import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductsPage = () => (
    <Layout>
        <SEO title="Products"/>
        <h1>Products</h1>
        <table>
            <thead>
            <tr>
                <th style={{color: `red`}}>Name</th>
                <th>Price</th>
                <th>Details</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Product 1</td>
                <td>$19.99</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                <td>
                    <button
                        className="snipcart-add-item"
                        data-item-id="product-1"
                        data-item-price="19.99"
                        data-item-url="/"
                        data-item-name="Product 1"
                        data-item-custom1-name="Size"
                        data-item-custom1-options="6|6.5|7|7.5|8|8.5|9"
                        data-item-custom2-name="This is a gift" data-item-custom2-type="checkbox"
                    >
                        Add to cart
                    </button>
                </td>
            </tr>
            <tr>
                <td>Product 2</td>
                <td>$19.99</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                <td>
                    <button
                        className="snipcart-add-item"
                        data-item-id="product-2"
                        data-item-price="19.99"
                        data-item-url="/"
                        data-item-name="Product 2"
                        data-item-custom1-name="Size"
                        data-item-custom1-options="6|6.5|7|7.5|8|8.5|9"
                        data-item-custom2-name="This is a gift" data-item-custom2-type="checkbox"
                    >
                        Add to cart
                    </button>
                </td>
            </tr>
            <tr>
                <td>Product 3</td>
                <td>$19.99</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                <td>
                    <button
                        className="snipcart-add-item"
                        data-item-id="product-3"
                        data-item-price="19.99"
                        data-item-url="/"
                        data-item-name="Product 3"
                        data-item-custom1-name="Size"
                        data-item-custom1-options="6|6.5|7|7.5|8|8.5|9"
                        data-item-custom2-name="This is a gift" data-item-custom2-type="checkbox"
                    >
                        Add to cart
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
        <div>
            <button className="snipcart-checkout">View Cart</button>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ProductsPage
