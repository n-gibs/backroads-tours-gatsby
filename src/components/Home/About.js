import React from "react";
import Title from "../Title";
import styles from "../../css/about.module.css";
//import img from "../../images/defaultBcg.jpeg";
import {useStaticQuery, graphql } from 'gatsby';
import Image from "gatsby-image";

const getAboutImage = graphql`
{
  aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`;

const About = () => {
    const {aboutImage} = useStaticQuery(getAboutImage);
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <Image fluid={aboutImage.childImageSharp.fluid} alt="about company" />

                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>
                        Activated charcoal fixie dreamcatcher kogi ugh.
                        Farm-to-table shaman kogi, blog artisan mustache freegan
                        church-key. PBR&B cred salvia photo booth occupy,
                        affogato twee literally trust fund yr small batch pop-up
                        man braid kitsch. Mumblecore flannel twee yr gentrify
                        hot chicken godard kale chips taiyaki chillwave. Banh mi
                        fixie live-edge, photo booth selvage scenester
                        letterpress YOLO edison bulb quinoa subway tile godard
                        four loko. Raclette direct trade squid palo santo street
                        art chia wayfarers ugh shaman photo booth tacos jean
                        shorts pickled.
                    </p>
                    <button type="button" className="btn-primary">
                        read more
                    </button>
                </article>
            </div>
        </section>
    );
};

export default About;
