import React from "react";
import "./Footer.css"

const Footer = ({length}) => {
    return (
        <footer className="footer">{`${length} Books in Inventory`}</footer>
    )
};

export default Footer;
