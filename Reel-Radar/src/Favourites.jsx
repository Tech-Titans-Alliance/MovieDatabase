import React, { useState } from 'react';
import './AddFavourite.css'; // Import custom CSS for styling

const AddFavourite = () => {
    const [isHovered, setIsHovered] = useState(false); // State to track hover effect

    return (
        <div 
            className="add-favourite"
            onMouseEnter={() => setIsHovered(true)} // Trigger hover state
            onMouseLeave={() => setIsHovered(false)} // Reset hover state
        >
            <span className="favourite-text">Add to favourites</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={isHovered ? "darkred" : "red"} // Change color on hover
                className={`bi bi-heart-fill ${isHovered ? 'heart-hover' : ''}`}
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
            </svg>
        </div>
    );
};

export default AddFavourite;
