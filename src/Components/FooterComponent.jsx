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
                <h4><a href='#'>Bartolozzi Lorenzo</a></h4>
                <h4><a href='#'>Canu Leonardo</a></h4>
                <h4><a href='#'>Maranghi Samuele</a></h4>
            </div>
            <div>
                <h2>Source Code</h2>
                <span className='orizontalSeparator'></span><br />
                <h4><a href='#'>Front-End</a></h4>
                <h4><a href='#'>Back-End</a></h4>
                <h4><a href='#'>Docker-Compose</a></h4>
            </div>
        </div>
    );
}
//=============================================================================================================================================
export default FooterBar;