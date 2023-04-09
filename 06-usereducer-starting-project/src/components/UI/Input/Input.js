import React, { useEffect, useRef } from "react";

import classes from './Input.module.css';

const Input = (props) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">E-Mail</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
