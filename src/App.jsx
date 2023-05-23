import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllWord from './Components/Texbox'

function App() {
  const fetcher = (url, options = {}) => {
    const queeryParams = '?' + new URLSearchParams(options).toString();
    return fetch('http://localhost:8080/api'+ url + queeryParams)
    .then((res) => {
      return res.json();
    })
    .catch(console.error);
  }
  return (
    <>
      <AllWord all={'4'} />
    </>
  )
}

export default App