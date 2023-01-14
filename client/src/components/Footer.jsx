import React from "react";
import "./Footer.css"

const Footer = ({length}) => {
    const text = length === 1 ? "Book" : "Books";
    return (
        <footer className="footer">{`${length} ${text} in Inventory`}</footer>
    )
};

export default Footer;
