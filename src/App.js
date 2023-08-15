
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/NavBar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable-Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  const removeClass=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-ligth')
  }
  const toggleColor=(cls)=>{
    removeClass();
    document.body.classList.add('bg-'+cls);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('Enable-Light Mode');
      document.body.style.background = "#021b35";
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode('light');
      setText('Enable-Dark Mode')
      document.body.style.background = "white";
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <NavBar title="Change-Text" mode={mode} toggleColor={toggleColor} toggleMode={toggleMode} text={text}/>
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
