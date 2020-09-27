import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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

export default function Home({ data }) {
    const {
        img: {
            childImageSharp: { fluid },
        },
    } = data;
    return (
        <Layout>
            <Hero home="true" img={fluid}>
                <Banner
                    title="continue Exploring"
                    info="Cray locavore ramps mlkshk, four loko twee bushwick. Small batch banjo butcher man bun vegan chartreuse. Gentrify yr pinterest bitters art party tattooed. "
                >
                    <AniLink fade to="/tours" className="btn-white">
                        explore things
                    </AniLink>
                </Banner>
            </Hero>
            <About />
            <Services />
        </Layout>
    );
}
