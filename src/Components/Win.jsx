/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useRef, useEffect } from "react";
import "./Component.css";

function Win({setWin}) {
  const reloadPage = () => {
    localStorage.removeItem('seed');
    setWin(false);
    location.reload();
  };
  return (
    <center>
      <div className="allWord-Div">
        <h1> Complimenti, hai indovinato! </h1>
        <div className="Control_Button">
          <button onClick={reloadPage}>Prova un'altra parola!</button>
        </div>
      </div>
    </center>
  );
}

export default Win;
