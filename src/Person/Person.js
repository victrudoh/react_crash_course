import React from "react";
import Radium from "radium";
import "./Person.css"

const person = (props) => {

    const style = {
      '@media (min-width: 360px)': {
        width: '260px'
      }
    }

    return (
      <div className="Person" style={style}>
        <input type="text" onChange={props.nameChange} value={props.name} />
        <h2 onClick={ props.click }>I'm { props.specie }</h2>
        <h2>I'm {props.name}</h2>
        <button onClick={props.delete} style={props.style}>
          Delete
        </button>
        <p>err...{ props.children } ??</p>
      </div>
    );
};

export default Radium(person);