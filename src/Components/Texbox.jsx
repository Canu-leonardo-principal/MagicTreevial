/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useRef, useEffect } from 'react';
import './Component.css';
//=============================================================================================================================================
function Word({ Nletters, onInputChange, wrongInputs, id }) {
    const [inputValues, setInputValues] = useState([]);  //è un array che contiene le lettere della parola che stiamo scrivendo
    const inputsRef = useRef([]); //è un array che contiene le reference agli elementi di 'Word'

    //qui gestisco quando inserisco una lettera
    const handlerOnChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
        onInputChange(newInputValues);  //ritorna al component AllWord le lettere mano a mano che vengono aggiunte

        if (event.target.value) {  inputsRef.current[index + 1]?.focus();  }
    };

    //qui gestisco, invece, gli eventi di quando premo gli altri tasti sulla tastiera
    const handlerOnKeyDown = (index, event) => {
        if (event.key === 'Backspace' && !event.target.value) { inputsRef.current[index - 1]?.focus(); }
        else if (event.key === 'ArrowRight')                  { inputsRef.current[index + 1]?.focus(); }
        else if (event.key === 'ArrowLeft')                   { inputsRef.current[index - 1]?.focus(); }
    };

    return (
        <div>
            <form>
                {Array.from({ length: Nletters }, (_, index) => (
                    <input
                        key={index + id}
                        ref={(el) => (inputsRef.current[index] = el)}
                        type="text"
                        maxLength={1}
                        onChange={(event) => handlerOnChange(index, event)}
                        onKeyDown={(event) => handlerOnKeyDown(index, event)}
                        className={
                            wrongInputs.includes((index + id).toString()) ? 'InputTextWrong' : 'InputTextdefault'
                        }
                    />
                ))}
            </form>
        </div>
    );
}
//=============================================================================================================================================
function Control_Button({ inputValues }) {
    const sendTry = () => {
        console.log(inputValues);
    };

    return (
        <div className="Control_Button">
            <button onClick={sendTry}>Try!</button>
        </div>
    );
}
//=============================================================================================================================================
function AllWord({ all, wrongs }) {
    const [inputValues, setInputValues] = useState([]);

    const numbers = all.split('-');
    const wrongValues = wrongs.split('-');

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);

    };

    return (
        <div className="allWord-Div">
            {Array.from({ length: numbers.length }, (_, i) => (
                <Word key={i * 100} id={i * 100} Nletters={numbers[i]}
                    onInputChange={(value) => handleInputChange(i, value)}
                    wrongInputs = {wrongValues}
                />
            ))}
            <Control_Button words={all} inputValues={inputValues} />
        </div>
    );
}
//=============================================================================================================================================
export default AllWord;