// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [movies,setMovies]=useState([])
  const [input,setInput]=useState("")



  const data = async ()=>{
    

    await axios ({
      method: 'GET',
      url: `http://www.omdbapi.com/?apikey=d67d903a&t=${input}`,
      
      
    }).then((res)=>{
      console.log(res.data)
     
      setMovies(res.data)
    })

    
  }
const search =()=>{
  data()
}
  useEffect (()=>{
    data()

  },[])

  return (
    <div className="App">
       <input type="text" value={input} onChange = {(e)=>setInput(e.target.value)} />
      <input type="submit"  onClick={search}/>



      <img src={movies.Poster} alt="" />
     
      <h1>{movies.Title}</h1>
     
      
   
    </div>
  );
}

export default App;
