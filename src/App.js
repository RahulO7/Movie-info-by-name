// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Navbar from './Components/Navbar';

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
    }).catch((error)=>{
      console.log(error.data)
      setMovies(error.data)

    })

    
  }
const search =()=>{
  data()
}
  // useEffect (()=>{
  //   data()

  // },[])

  return (<>
  <Navbar setInput = {setInput} search={search} input={input}/>


{movies.Response === "True"?
   <div className="App">
       



   <img src={movies.Poster} alt="" />
  
   <h1>{movies.Title}</h1>
  
   

 </div>:movies.Response === "False"?<p>No Data Found</p>:<p>Search any movie</p>

}
   
  </>
  );
}

export default App;
