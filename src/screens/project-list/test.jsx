import React, { useState } from 'react';


function Test(props) {

    const [a, setA] = useState("")

    const getOnClick = (e) => {
            console.log("event :", e)
            console.log("event target:", e.target)
            console.log("event target id:", e.target.id)
    }


    return (
        <div>
            <div onClick={getOnClick} id="number1">number1</div>
            <div onClick={getOnClick} id="number2">number2</div>
            <div onClick={getOnClick} id="number3">number3</div>
            
            
        </div>
    );
}

export default Test;