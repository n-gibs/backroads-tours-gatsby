import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import Contact from "../components/Contact/Contact"
import SEO from '../components/SEO'

export const query = graphql`
    {
        img: file(relativePath: { eq: "connectBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
const contact = ({ data }) => {
    const {
        img: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <Layout>
        <SEO title="Contact" />
            <Hero img={fluid}/>
            <Contact />
        </Layout>
    );
};

export default contact;
