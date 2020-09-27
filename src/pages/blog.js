import React from 'react'
import Layout from '../components/Layout'
import Hero from "../components/Hero";
import { graphql } from "gatsby";

export const query = graphql`
    {
        img: file(relativePath: { eq: "blogBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

const blog = ({ data }) => {
    const {
        img: {
            childImageSharp: { fluid },
        },
    } = data;

    return (
        <Layout>
            <Hero img={fluid}></Hero>
        </Layout>
    );
};

export default blog;
