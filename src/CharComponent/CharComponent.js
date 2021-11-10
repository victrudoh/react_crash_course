import React from 'react'
import CharComponentCSS from "./CharComponentCSS.css";

const CharComponent = (props) => {
    return <div className="CharComponent" onClick={props.delete}>
        <p>{props.char}</p>
</div>;
}

export default CharComponent
