/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useRef, useEffect } from 'react';
import './Component.css';
//=============================================================================================================================================
function Word({ Nletters }) {
    
    //Variabile che tiene segno di tutte le reference sul Dom, credo
    const inputsRef = useRef([]);

    //qui gestisco quando inserisco un lettera
    const handleInputChange = (index, event) => {
        if (event.target.value) {  inputsRef.current[index + 1]?.focus();  }
    };

    //qui gestisco, invece, gli eventi di quando premo gli altri tasti sulla tastiera
    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && !event.target.value) { inputsRef.current[index - 1]?.focus(); }
        else if (event.key === 'ArrowRight')                  { inputsRef.current[index + 1]?.focus(); }
        else if (event.key === 'ArrowLeft')                   { inputsRef.current[index - 1]?.focus(); }
    };

    return (
        <div>
            <form>
                {Array.from({ length: Nletters }, (_, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputsRef.current[index] = el)}
                        type="text"
                        maxLength={1}
                        onChange={(event) => handleInputChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        className='InputTextdefault'
                    />
                ))}
            </form>
        </div>
    );
}
//=============================================================================================================================================
function AllWord({ all }) {
    const numbers = all.split('-');

    return (<div className='allWord-Div'>
        {Array.from({ length: numbers.length }, (_, i) => (
            <Word key={i * 100} id={i * 100} Nletters={numbers[i]} />
        ))}
    </div>
    );
}
//=============================================================================================================================================
export default AllWord;