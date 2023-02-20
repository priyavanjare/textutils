
import './App.css';
import React, { useState } from "react";
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';




 function App() {
  const[mode,setMode]=useState("light")//whether the dark mode in enabled or not
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","success ")
      document.title="textUtils-Dark mode"
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success ")
      document.title="textUtils-Light mode"
    }
  }
  return (
   <>
   
  <Navbar mode={mode} toggleMode={toggleMode}
  title="TextUtils" 
  home="Home"
  about="About"/>
  <Alert alert={alert}/>
  <div className='container my-3'>

      

         <Textform mode={mode} showAlert={showAlert}
     heading="Enter The Text To Analyze Below"/>
     
     
  </div>
  
  
    </>
  );
}
 export default App;

