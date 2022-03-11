import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                Ingine
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/shahi.utsav101">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/insecureingine/">
                    <FaInstagram />
                </a>
                <a href="https://discord.gg/pptJ2CAKTU">
                    <FaDiscord />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Ingine. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
