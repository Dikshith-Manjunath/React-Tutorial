import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'



function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
    }else{
      setMode('light')
    }
  }
  return (
    <>
      <Navbar title="Tutorial-1" aboutText="About Tutorials" mode={mode} toggleMode={toggleMode}/>
      {/* title can be used as a prop that can be changed for different websites  */}
      <div className="container my-3">
        <TextForm
          title="Enter your email:"
          email="Example@gmail.com"
          password="Password@123"
        />
      </div>
      <About />
    </>
  );
}

export default App;