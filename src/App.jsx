/* eslint-disable no-unused-vars */
import './App.css'
import AllWord from './Components/Texbox'
import HeaderBar from './Components/NavComponent';
import FooterBar from './Components/FooterComponent';

function App() {
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
        <AllWord all={'6-9-3'} />
        <FooterBar />
      </div>  
    </>
  )
}

export default App