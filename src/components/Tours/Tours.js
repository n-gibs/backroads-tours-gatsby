import React from "react";
import TourList from "./TourList";
import { useStaticQuery, graphql } from "gatsby";

const getTours = graphql`
{
  tours: allContentfulTour {
    nodes {
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
`
const Tours = () => {
  const {tours:{nodes}} = useStaticQuery(getTours)
    return (
        <div>
            tours
            <TourList tours={nodes}/>
        </div>
    );
};

export default Tours;
