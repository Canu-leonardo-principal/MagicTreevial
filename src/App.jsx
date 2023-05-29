/* eslint-disable no-unused-vars */
import './App.css'
import AllWord from './Components/Texbox'
import HeaderBar from './Components/NavComponent';
import FooterBar from './Components/FooterComponent';

function App() {

  const currentDate = new Date();
  const seed = currentDate.getTime().toString();// creo il seed da mandare all'API per la creazione del cruciverba

  const fetcher = (url, options = {}) => {
    const queeryParams = '?' + new URLSearchParams(options).toString();
    return fetch('http://localhost:8080/api' + url + queeryParams)
      .then((res) => {
        return res.json();
      })
      .catch(console.error);
  }
  return (
    <>
      <div className='Div-Page'>
        <HeaderBar />
        <AllWord all={'5-9-2'} wrongs={''}/>
        <FooterBar />
      </div>  
    </>
  )
}

export default App