import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ searchValue, setSearchValue }) => {
    return (
        <div className="d-flex justify-content-between align-items-center w-100 bg-primary text-white py-3 px-4">
            {/* Left-Aligned Title */}
            <h1 className="m-0">Movie Finder</h1>

            {/* Right-Aligned Search Box */}
            <div className="col-sm-4">
                <input
                    type="text"
                    className="form-control"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Type to search..."
                />
            </div>
        </div>
    );
};

export default Header;
