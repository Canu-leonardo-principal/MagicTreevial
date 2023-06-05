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

        if (event.target.value) { inputsRef.current[index + 1]?.focus(); }
    };

    //qui gestisco, invece, gli eventi di quando premo gli altri tasti sulla tastiera
    const handlerOnKeyDown = (index, event) => {
        if (event.key === 'Backspace' && !event.target.value) { inputsRef.current[index - 1]?.focus(); }
        else if (event.key === 'ArrowRight') { inputsRef.current[index + 1]?.focus(); }
        else if (event.key === 'ArrowLeft') { inputsRef.current[index - 1]?.focus(); }
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
                            wrongInputs.includes((index + id)) ? 'InputTextWrong' : 'InputTextdefault'
                        }
                    />
                ))}
            </form>
        </div>
    );
}
//=============================================================================================================================================
function Control_Button({ inputValues, setWrongCells, fetchData, seedByCurrentDate, setWin }) {
    const sendTry = () => {
        //console.log(inputValues);
        //console.log(JSON.stringify(inputValues)); 
        fetchData('/verify', {seed: seedByCurrentDate}, inputValues).then(res => {  setWrongCells(res);  });
        setWin(true);
    };

    return (
        <div className="Control_Button">
            <button onClick={sendTry}>Prova!</button>
        </div>
    );
}
//=============================================================================================================================================
function AllWord({ all, fetcher, seed, setWin }) {
    const [inputValues, setInputValues] = useState([]);
    const [wrongs, setWrong] = useState([]);

    //funzione che crea gli array di parole man mano che inseriamo le lettere
    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    };

    //funzione per settare l'arrai degli indici delle celle sbagliate
    const setWrongCells = (newValues) => {  setWrong(newValues); }

    return (<>
        <center>
            <div className="allWord-Div">
                <h1> Regole del gioco </h1>
                <ul>
                    <li> Hai a disposizione un numero illimitato di tentativi </li>
                    <li> Dovrai indovinare tutte le parode del cruciverba </li>
                    <li> L&apos;obbiettivo è quello di trovare la parola casuale, tramite le iniziali di quella che inserirai </li>
                    <li> Le lettere sbagliate verranno marcate in rosso </li>
                </ul><br />
        
                {Array.from({ length: all.length }, (_, i) => (
                    <Word key={i * 100} id={i * 100} Nletters={all[i]}
                        onInputChange={(value) => handleInputChange(i, value)}
                        wrongInputs={wrongs}
                    />
                ))}
                <Control_Button words={all} inputValues={inputValues} setWrongCells={setWrongCells} fetchData={fetcher} seedByCurrentDate={seed} setWin={setWin}/>
            </div>
        </center>
    </>
    );
}
//=============================================================================================================================================
export default AllWord;