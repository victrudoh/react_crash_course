import React from "react";

const UserOutput = (props) => {
    return (
      <div>
        <p className={ props.style }>Username: {props.DisplayUsername}</p>
        <p>only God knows</p>
      </div>
    );
}

export default UserOutput;