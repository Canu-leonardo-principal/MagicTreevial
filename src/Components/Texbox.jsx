import React, { useState, useRef } from 'react';
import './Component.css'
import { useEffect } from 'react';


function SingleLetterInputBox({ id, deleteMethod, writeMethod, goPrevMethod, goNextMethod, GivenValue, focus }) {

    const [isCorrect, setCorrect] = useState(true);

    //funzione per il mapping della tastiera per la gestione di eventi e lo spostamento tra le caselle
    const onKeyDown = (event) => {

        if (event.key === 'Backspace') { deleteMethod(id); }
        else if (event.key === 'ArrowLeft') { goPrevMethod(id) }
        else if (event.key.length === 1) { writeMethod(id, event.key); }
        else if (event.key === 'ArrowRight') { goNextMethod(id) }
    };

    //creazione del textbox e formattazzione
    return (
        <input type="text" maxLength={1}
            id={id}
            value={GivenValue}
            onKeyDown={onKeyDown}
            autoFocus={focus}
            style={{
                padding: '10px',
                aspectRatio: '1 / 1',
                width: '15px',
                backgroundColor: isCorrect ? 'transparent' : 'red',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid black',
                textTransform: 'uppercase',
                margin: '2.5px',
                alignContent: 'center',
            }}
        />
    );
}

//creazione delle caselle per parola data
function EntireWord({ Nletters, id }) {

    let index = 1;
    const [currentWord, setCurrentWord] = useState("");
    const [focus, setFocus] = useState(0);


    //====================DELETE METHOD
    const deletePrev = (id) => {
        console.log('delete' + id);
    }
    //====================WRITE METHOD
    const writeValue = (id, value) => {
        let newWord = currentWord;
        newWord = newWord.substring(0, id) + value + newWord.substring(id + 1);
        setCurrentWord(newWord);
        setFocus(id+1);
        
    }
    //====================PREV METHOD
    const goPrev = (id) => {
        console.log('go to ' + (id - 1) + 'from' + id);
    }
    //====================NEXT METHOD
    const goNext = (id) => {
        console.log('go to ' + (id + 1) + 'from' + id);

    }
    return (<div>
        {Array.from({ length: Nletters }, (_, i) => (
            <SingleLetterInputBox
                key={i}
                id={i}
                deleteMethod={deletePrev}
                writeMethod={writeValue}
                goPrevMethod={goPrev}
                goNextMethod={goNext}
                GivenValue={currentWord[i]}
                focus={i==focus}
            />
        ))}
    </div>
    );
}

function AllWord({ all }) {
    const numbers = all.split('-');

    return (<div>
        {Array.from({ length: numbers.length }, (_, i) => (
            <EntireWord key={i} id={i} Nletters={numbers[i]} />
        ))}
    </div>
    );
}

export default AllWord;