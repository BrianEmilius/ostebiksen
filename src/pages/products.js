import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import ProductCard from "../components/product-card";

class ProductIndex extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title');
		const products = get(this, 'props.data.allContentfulProduct.nodes');

		return (
			<Layout>
				<Helmet title={siteTitle} />
				<h1>Products</h1>
				{ products.map(product => {
					return <ProductCard {...product} key={product.slug} />
				}) }
			</Layout>
		)
	}
}

export default ProductIndex;

export const productQuery = graphql`
query productQuery {
	site {
		siteMetadata {
			title
		}
	}
	allContentfulProduct {
		nodes {
			category
			discount
			name
			price
			sku
			slug
			stock
			description
			image {
				fluid {
					src
				}
			}
		}
	}
}
`;