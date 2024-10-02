
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const toggleButton = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0b0b0c';
      showAlert("Dark mode Enabled" , "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled" , "success");
    }
  };

const [alert, setAlert]=useState(null);
const showAlert = (message, type)=>{
  setAlert({
    msg:message,
    type:type
  });
  setTimeout(() => {
    setAlert(null);
  }, 1000);

};


  return (
    <>
      <Navbar title="TextUtils" about="About us" toggleButton={toggleButton} mode={mode} />
      <Alert alert ={alert}/>
        <TextForm mode={mode} heading ="Text Box "  showAlert={showAlert}/>
    </>
  );
}

export default App;