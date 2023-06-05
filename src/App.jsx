/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import AllWord from './Components/Texbox'
import HeaderBar from './Components/NavComponent';
import FooterBar from './Components/FooterComponent';
//  https://tanstack.com/query/v3/docs/react/overview
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider, } from 'react-query'
import { useEffect, useState } from 'react';
//  words:
//  https://github.com/napolux/paroleitaliane/blob/master/paroleitaliane/60000_parole_italiane.txt


// Create a client
const queryClient = new QueryClient();

function Loader({fetchData}) {
  const [data, setData] = useState([]);
  const [wrongs, setWorngs] = useState([]);

  const setNewWorngs = (newWrongs) => {  setWorngs(newWrongs);  }
  
  const currentDate = new Date();
  const seedBydate = currentDate.getTime().toString();// creo il seed da mandare all'API per la creazione del cruciverba  

  useEffect(() => {
    if (data.length === 0)
    {
      fetchData('/start', {seed: seedBydate}).then(res => {  setData(res);  }); 
    }
    else
    {
      fetchData('/');
    }
  }, [data]);

  return (
    <>
      <AllWord all={data} wrongs={wrongs} />
    </>
  );
}

function App() {

  const fetcher = (url, options = {}) => {
    const queryParams = '?' + new URLSearchParams(options).toString();
    return fetch('http://localhost/' + url + queryParams)
      .then((res) => {
        return res.json();
      })
      .catch(console.error);
  }

  return (
    <>
      <div className='Div-Page'>
          <HeaderBar />
          <Loader fetchData={fetcher} />
          <FooterBar />        
      </div>
    </>
  )

}



export default App