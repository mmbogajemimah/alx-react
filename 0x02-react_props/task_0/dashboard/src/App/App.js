import React from 'react';
import './App.css';
//import logo from '../assets/holberton_logo.jpg';
//import { getFooterCopy, getFullYear } from '../utils/utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
    </div>
    </>
  );
}

export default App;
