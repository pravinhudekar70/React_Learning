
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const toggleButton = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0b0b0c'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  };
  return (
    <>
      <Navbar title="TextUtils" about="About us" toggleButton={toggleButton} mode={mode} />
      <div>
        <TextForm mode={mode} heading ="Text Box " />
      </div>
    </>
  );
}

export default App;
