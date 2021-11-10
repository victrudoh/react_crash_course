import React from 'react'

const ValidationComponent = (props) => {
    return (
      <div className={props.classColor}>
        {props.length < 5 ? "Text too short" : "Text long enough"}
      </div>
    );
}

export default ValidationComponent
