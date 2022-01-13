import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import Popup from './components/popups/Popup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './controllers/popupController.js'
import { BrowserRouter } from 'react-router-dom';


const App = () =>(
  <div className="">
    <ToastContainer />
    <BrowserRouter>
      <Header />
      <div className='container-fluid'>
        <Routes />
      </div>
    </BrowserRouter>
  </div>
)

export default App;
