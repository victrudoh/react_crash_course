import React from "react";

const UserInput = (props) => {
    return (
      <input
        type="text"
        onChange={props.UsernameChange}
        value={props.DisplayUsername}
        />      
    );
}

export default UserInput;