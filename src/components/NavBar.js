import React, { useState } from "react";
import styles from "../css/navbar.module.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import links from "../constants/links";
import logo from "../images/logo.svg";
import socialIcons from "../constants/social-icons";
import { FaAlignRight } from "react-icons/fa";

const NavBar = () => {
    const [isOpen, setNav] = useState(false);
    const toggleNav = () => {
        setNav(isOpen => !isOpen);
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="background logo" />
                    <button
                        type="button"
                        className={styles.logoBtn}
                        onClick={toggleNav}
                    >
                        <FaAlignRight className={styles.logoIcon} />
                    </button>
                </div>
                <ul
                    className={
                        isOpen
                            ? `${styles.navLinks} ${styles.showNav}`
                            : `${styles.navLinks}`
                    }
                >
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <AniLink fade to={link.path}> {link.text} </AniLink>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((icon, index) => {
                        return (
                            <a key={index} href={icon.url} target="_blank"
                            rel="noopener noreferrer">
                                {icon.icon}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};


export default NavBar;
