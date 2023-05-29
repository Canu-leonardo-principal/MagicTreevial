/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import './Component.css'

function FooterBar() {
    const logo = '/src/assets/Logo.png';

    return (
        <div className='Footer-Div'>
            <div>
                <h2>Made by</h2>
                <span className='orizontalSeparator'></span><br />
                <h4><a href='#' target='blank'>Bartolozzi Lorenzo</a></h4>
                <h4><a href='https://github.com/Canu-leonardo-principal' target='blank'>Canu Leonardo</a></h4>
                <h4><a href='https://github.com/Randomsos' target='blank'>Maranghi Samuele</a></h4>
            </div>
            <div>
                <h2>Source Code</h2>
                <span className='orizontalSeparator'></span><br />
                <h4><a href='https://github.com/Canu-leonardo-principal/MagicTreevial/tree/master' target='blank'>Front-End</a></h4>
                <h4><a href='#' target='blank'>Back-End</a></h4>
                <h4><a href='#' target='blank'>Docker-Compose</a></h4>
            </div>
        </div>
    );
}
//=============================================================================================================================================
export default FooterBar;