import React from 'react'


const User = (props) => {

    return (
        <li>
            <span>name : {props.children}  | age : {props.age}</span>
            <button onClick={props.delEvent}> Delete </button>
            <input type="text" onChange={props.changeUserName} value={props.children} > </input>
        </li>
    )
}


export default User;