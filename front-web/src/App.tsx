import React from 'react';
import { ToastContainer} from 'react-toastify';
import './App.css';
/*import Navbar from './Navbar';*/
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
       <Routes />
       <ToastContainer />
    </>
  );
}

export default App;
