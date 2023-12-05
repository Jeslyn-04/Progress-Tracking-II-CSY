import { useState,useEffect } from "react";
import React from "react";

function Timer() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count+1);
            alert("Useeffect")
        },5000);
    });

    const update = () => {
        setCount(count+1)
    }

    return(
        <>
            <h1>I have rendered {count} times!</h1>
            <button onClick={update}>Click here</button>
        </>
    );
}

export default Timer