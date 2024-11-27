import React from "react";
import "./footer.css";

const Footer = () => {
    // Team members and their GitHub profiles
    const team = [
        { name: "R.M", link: "https://github.com/RolivhuwaMuzila" },
        { name: "A.S", link: "https://github.com/AtlehangSemela" },
        { name: "A.M", link: "https://github.com/AsandaMthimande" },
        { name: "X.V", link: "https://github.com/XolaniVilakazi" },
        { name: "P.M", link: "https://github.com/PalesaMashabela" },
    ];

    return (
        <section id="footer">
            <div className="footer container">
                <div className="brand">
                    <h1>
                        <span></span> {/* Removed Tech Titans text from here */}
                    </h1>
                </div>
                <span className="footer-heading">Get In Touch</span> {/* Changed to a span instead of h2 */}
                <div className="social-icon">
                    {team.map((member, index) => (
                        <div className="social-item" key={index}>
                            <a
                                href={member.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={member.name} // Tooltip on hover
                            >
                                <img
                                    src="https://img.icons8.com/bubbles/100/000000/github.png"
                                    alt={member.name}
                                />
                            </a>
                            <p>{member.name}</p> {/* Display name below the icon */}
                        </div>
                    ))}
                </div>
                <p>&copy; 2024 Tech Titans. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Footer;
