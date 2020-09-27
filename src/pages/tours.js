import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import Tours from '../components/Tours/Tours'
export const query = graphql`
    {
        img: file(relativePath: { eq: "defaultBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

const tours = ({ data }) => {
    const {
        img: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <Layout>
            <Hero img={fluid}/>
            <Tours />
        </Layout>
    );
};

export default tours;
