import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here ");
    const handleUpClick = ()=>{
        console.log("UpperCase is Clicked");
        setText(text.toUpperCase());
    };
   const handleOnChange = (event)=>{
    console.log("handle on change ");
    setText(event.target.value);
    };
    const handleDownClick = (event)=>{
        console.log("handle on downClick");
        setText(text.toLowerCase());
    };
    return (
        <>
            <h2>{props.heading}</h2>
            <div className="form-group">
                <textarea className="form-control"  value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <div className=" mt-3">
            <button className="btn btn-primary mx-2 " onClick ={handleUpClick} > Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 " onClick={handleDownClick} >Convert to LowerCase </button>
            </div>
        </>
    )
}
