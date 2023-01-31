// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {


  const data = async ()=>{

    await axios ({
      method: 'GET',
      url: 'http://www.omdbapi.com/?apikey=d67d903a&t=',
      
      
    }).then((res)=>{
      console.log(res.data)

    })

    
  }

  useEffect (()=>{
    data()

  },[])

  return (
    <div className="App">
   
    </div>
  );
}

export default App;
