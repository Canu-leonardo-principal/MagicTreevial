/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import './Component.css'

function HeaderBar() {
    const logo = '/src/assets/Logo.png';

    return (
        <div className='NavBar-Div'>
            <img src={logo} alt='Non Funziona :(' />
            <h1>Magic Treevial</h1>
        </div>
    );
}
//=============================================================================================================================================
export default HeaderBar;