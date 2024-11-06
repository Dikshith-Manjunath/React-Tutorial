import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from "react"; /* the {useState} is called a hook and it is a useful property that's gonna be used further*/
export default function TextForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleOnChange = (event) => {
    event.preventDefault();
    console.log("The Data has been changed");
    setText(event.target.value);
  };
  const navigate = useNavigate();
  const [text, setText] = useState(""); /* Hooks are like classes without the use of actual classes */
  return (
    <>
      <div className="container">
        <form className="d-flex flex-column justify-content-center align-items-center" style={{width:'77vw'}}>
          <h1>{props.title}</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              /* value= {text}*/ aria-describedby="emailHelp"
              placeholder={props.email} 
              style={{ backgroundColor: `${props.mode === 'light' ? 'white' : 'grey'}`, color: `${'dark' ? 'black' : 'grey'}` }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your details with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              placeholder={props.password} style={{ backgroundColor: `${props.mode === 'light' ? 'white' : 'grey'}`, color: `${'dark' ? 'black' : 'grey'}` }}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              show password
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => {navigate('Submit')}}>
            Submit
          </button>
        </form>
        <div className="mb-3 my-5">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{ backgroundColor: `${props.mode === 'light' ? 'white' : 'grey'}`, color: `${'dark' ? 'black' : 'grey'}` }}
        ></textarea>
        </div>
        <button
          disabled={text.length===0}
          className="btn btn-primary mx-2 my-2"
          onClick={() => {
            setText(text.toUpperCase());
          }}
        >
          Change to Uppercase
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-primary mx-2 my-2"
          onClick={() => {
            setText(text.toLowerCase());
          }}
        >
          Change to Lowercase
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-primary mx-2 my-2"
          onClick={() => {
            setText("");
          }}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text summary</h1>
        <p>
          number of words: {text.split(" ").filter((elem)=>{return elem.length!==0}).length} and Text Length:{" "}
          {text.length}
        </p>
        <p>Time to read (avg in min): {0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length}</p>
      </div>
    </>
  );
}
