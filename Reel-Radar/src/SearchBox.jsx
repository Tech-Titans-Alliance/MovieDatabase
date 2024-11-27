import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const SearchBox = (props)=>{
    return(
        <div className="col col-sm-4">
            <input className=""
            value={props.value}
            onChange={(event)=>props.setSearchValue(event.target.value)}
             placeholder="type to search...">
            </input>
        </div>

    )
}

export default SearchBox;