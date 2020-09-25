import { Link } from "gatsby";
import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import About from "../components/Home/About";

export default function Home() {
    return (
        <Layout>
            <Banner
                title="continue Exploring"
                info="Cray locavore ramps mlkshk, four loko twee bushwick. Small batch banjo butcher man bun vegan chartreuse. Gentrify yr pinterest bitters art party tattooed. "
            >
              <Link to = "/tours" className="btn-white">
                explore things
              </Link>
            </Banner>
            <About />
        </Layout>
    );
}
