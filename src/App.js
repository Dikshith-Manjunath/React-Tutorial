import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from './components/Alert'
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#222831';
      document.body.style.color = 'white';
      showAlert('Dark mode is enabled.','success')
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode is enabled.','success')
    }
  }
  return (
    <>
          <Navbar title="Tutorial-1" aboutText="About Tutorials" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert}/>
        <div className="container my-3">
          <TextForm title="Enter your email:" email="Example@gmail.com" password="Password@123" mode={mode} />
        </div>
          <About />
    </>
  );
}

export default App;
