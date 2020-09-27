import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <main>
            <NavBar />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
