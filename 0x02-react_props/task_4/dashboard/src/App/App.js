import React from 'react';
import './App.css';
//import logo from '../assets/holberton_logo.jpg';
//import { getFooterCopy, getFullYear } from '../utils/utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn = true }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
    </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false
};


App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
