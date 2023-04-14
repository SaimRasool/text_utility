import { useState } from 'react';
import './App.css';
//import About from './Component/About';
import Navbar from './Component/Navbar'
import TextForm from './Component/TextForm'
import Alert from './Component/Alert';
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route
// } from "react-router-dom";
function App() {
 const[mode,setMode]= useState("light");
 const[alert,setAlert]= useState(null);


 const toggleMode=(color,e)=>{
  if(mode!=="light"&& !e.target.checked)
  {
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Light Mode has been Enable","success");
  }
  else
  {  
 if(color==="blue")
    {
        setMode("primary");
    }
    else
    setMode("dark");
    document.body.style.backgroundColor=color;
    document.body.style.border="3px solid white";
    showAlert("Dark Mode has been Enable","success");
    document.title="TextUtlis - Dark";

//for changing title in every second
    setInterval(()=>{
       document.title="TextUtlis - 1";
    },2000);
    setInterval(()=>{
       document.title="TextUtlis - 2";
    },1500);

  }
 }

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null);
},1500)
}
/* <Router>
      <Navbar Title="My Todo List" SearchBar={false} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes >
          <Route  path="/" element={  <TextForm showAlert={showAlert} heading="Enter The Text to analyze below"  mode={mode}/>}> 
          </Route>
          <Route  exact path="About/*" element={ <About />}>
          </Route> 
        </Routes >

       </Router> */
  return (
    <>
    
        <Navbar Title="My Todo List" SearchBar={false} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
       <TextForm showAlert={showAlert} heading="Enter The Text to analyze below"  mode={mode}/>
    </>
  );
}

export default App;
