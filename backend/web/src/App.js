import Register from "./Pages/Register";
import React, {useEffect} from 'react';
import {  Route, Routes,useNavigate} from 'react-router-dom';
import './App.css';
import Cases from "./Pages/Cases";
import Match from "./Pages/Match";
import axios from "axios";
function App() {
  const data="http://localhost:8000/register/"
  useEffect(() =>{
    axios.get(data).then(e=>{
      console.log(e.data)
    })
    
  }, []);
  const navigate=useNavigate();
  return (
    <div className="App">
      

      <div className="Navbar">
        <button onClick={()=>navigate("/")}>View Cases</button>
        <button onClick={()=>navigate("register_case/")}>Register Case</button>
        <button onClick={()=>navigate("match_cases/")}>Match Cases</button>
      </div>
      <Routes>
      <Route exact path="/" element={<Cases/>}></Route>
      <Route  path="register_case/" element={<Register/>}></Route>
      <Route  path="match_cases/" element={<Match/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
