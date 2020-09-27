import React from "react";
import Title from "../Title";
import styles from "../../css/items.module.css";
import Tour from "../Tours/Tour";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from "gatsby";

const featuredTours = graphql`
    {
        featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
            tours: nodes {
                name
                slug
                price
                country
                days
                contentful_id
                images {
                    fluid {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
`;

const FeaturedTours = () => {
    const {
        featuredTours: { tours },
    } = useStaticQuery(featuredTours);
    return (
        <section className={styles.tours}>
            <Title title="featured" subtitle="tours" />
            <div className={styles.center}>
                {tours.map(tour => {
                    return <Tour key={tour.contentful_id} tour={tour} />;
                })}
            </div>

            <AniLink fade to="/tours" className="btn-primary">
                all tours
            </AniLink>
        </section>
    );
};

export default FeaturedTours;