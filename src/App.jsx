/* eslint-disable no-unused-vars */
import './App.css'
import AllWord from './Components/Texbox'
import HeaderBar from './Components/NavComponent';
import FooterBar from './Components/FooterComponent';

//  https://github.com/napolux/paroleitaliane/blob/master/paroleitaliane/60000_parole_italiane.txt

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

  const response_exaple = [7,11,9,8,9,2];

  return (
    <>
      <div className='Div-Page'>
        <HeaderBar />
        <AllWord all={response_exaple} wrongs={'1-302'}/>
        <FooterBar />
      </div>  
    </>
  )
}

export default App