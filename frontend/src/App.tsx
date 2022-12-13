import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios';

function App() {
  const api = axios.create({
    baseURL: 'http://localhost:3000'
  });


  const [apis, setApis] = useState([]);


  const fetchApi = async () => {
    try {
      const response = await api.get('/getApis');
      return response.data.entries;
    } catch (error : any) {
      throw error.response.data;
    }
  }

  useEffect(() => {
    const getApis = async () => {
      const fetchedApis = await fetchApi();

      if (fetchedApis) {
        setApis(fetchedApis);
      }
    } 

    getApis();
  }, [])


  return (
    <div className="App">
      <h1>Public APIs</h1>
      {apis?.map((api, index) => {
        return (
          <ul key={index}>
            <h3>{api["API"]}</h3>
            <p>{api["Description"]}</p>
          </ul>
        )     
      })}
    </div>
  );
}

export default App;
