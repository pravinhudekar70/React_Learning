
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title ="TextUtils" about ="About us" />
    <div className='container my-3'>
    <TextForm heading ="Enter text to analyze below" />
    </div>
    
    </>
  );
}

export default App;
