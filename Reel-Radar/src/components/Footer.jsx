import React from "react";
import "./Footer.css"; // Import the footer.css file

const Footer = () => {
    return (
        <footer className="footer"> {/* Apply the "footer" class */}
            {/* Circular Links Section */}
            <div className="circle-links">
                <a href="#" className="circle-link">
                    <div>AS</div>
                </a>
                <a href="#" className="circle-link">
                    <div>AN</div>
                </a>
                <a href="#" className="circle-link">
                    <div>PM</div>
                </a>
                <a href="#" className="circle-link">
                    <div>XV</div>
                </a>
                <a href="#" className="circle-link">
                    <div>RM</div>
                </a>
            </div>
            <p>&copy; 2024 Reel Radar. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
