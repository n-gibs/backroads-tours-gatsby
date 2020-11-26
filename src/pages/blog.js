import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Blog from "../components/Blog/Blog";

const blogs = ({ data }) => {
    return (
        <Layout>
            <SEO title="Blog" />
            <Hero img={data.bcg.childImageSharp.fluid} />
            <Blog />
        </Layout>
    );
};
export const query = graphql`
    query {
        bcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default blogs;
