import React from "react";
import "./footer.css"; // Import the footer.css file
const Footer = () => {
    return (
        <footer className="footer"> {/* Apply the "footer" class */}
            {/* Circular Links Section */}
            <div className="circle-links">
                <a href="https://github.com/atlehang66" className="circle-link">
                    <div>AS</div>
                </a>
                <a href="https://github.com/asandan8106" className="circle-link">
                    <div>AN</div>
                </a>
                <a href="https://github.com/pali-pali" className="circle-link">
                    <div>PM</div>
                </a>
                <a href="https://github.com/Xolanisyav04" className="circle-link">
                    <div>XV</div>
                </a>
                <a href="https://github.com/rolivhuwamuzila" className="circle-link">
                    <div>RM</div>
                </a>
            </div>
            <p>&copy; 2024 Reel Radar. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
