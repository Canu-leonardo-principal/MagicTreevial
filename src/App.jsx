/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import AllWord from './Components/Texbox'
import HeaderBar from './Components/NavComponent';
import FooterBar from './Components/FooterComponent';
import Win from './Components/Win';
//  https://tanstack.com/query/v3/docs/react/overview
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider, } from 'react-query'
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
//  words:
//  https://github.com/napolux/paroleitaliane/blob/master/paroleitaliane/60000_parole_italiane.txt


// Create a client
const queryClient = new QueryClient();

function Loader({ fetchData }) {
  const [data, setData] = useState([]);
  const [win, setWin] = useState(false);

  //const [seedByCurrentDate, setSeedByCurrentDate] = useState(0);

  if (localStorage.getItem('seed') === null)
  {
    localStorage.setItem('seed', new Date().getTime().toString());

  }

  useEffect(() => {
    
    fetchData('/start', { seed: localStorage.getItem('seed') }).then(res => { setData(res); });
  }, []);

  return (  <>  {  !win ? <AllWord all={data} fetcher={fetchData} seed={localStorage.getItem('seed')} setWin={setWin} /> : <Win setWin={setWin} />  }  </>  )
}

function App() {

  const fetchData = (url, options = {}, _body) => {
    if (_body === undefined) {
      const queryParams = '?' + new URLSearchParams(options).toString();
      return fetch('http://172.21.113.252:8080' + url + queryParams)
        .then((res) => {
          return res.json();
        })
        .catch(console.error);
    }
    else {
      const queryParams = '?' + new URLSearchParams(options).toString();
      return fetch('http://172.21.113.252:8080' + url + queryParams, { body: JSON.stringify(_body), method: 'POST' })
        .then((res) => {
          return res.json();
        })
        .catch(console.error);
    }

  }

  return (
    <>
      <div className='Div-Page'>
        <HeaderBar />
        <Loader fetchData={fetchData} />
        <FooterBar />
      </div>
    </>
  )

}



export default App