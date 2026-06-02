import './Footer.css';
import { FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <h1>The Generics</h1>
            </div>
            <div className="footer-icons">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
                    <FaSpotify />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}

export default Footer;