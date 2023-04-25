import React from "react";

export default function Translation({doStuff,setInput,result}){
    return (
        <div>
            <textarea onChange={(e)=> setInput(e.target.value)} className="text-area" name="textarea" id="inputBox" cols={50} rows={10}></textarea>
            <button className="action-btn" onClick={doStuff}>DO YOUR STUFF!!</button>
            {/* <button className="action-b"></button> */}

            <h3 className="result-text">{result && result.length > 0 ? result : ""}</h3>
        </div>
    )
}