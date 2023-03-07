import React, { Component } from 'react';
import './App.css';
//import logo from '../assets/holberton_logo.jpg';
//import { getFooterCopy, getFullYear } from '../utils/utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications'
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: props.isLoggedIn,
      listCourses: [
        {id:1, name:'ES6', credit: 60},
        {id:2, name:'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
      ],
      listNotifications: [
        {id: 1, value: "New course available", type: "default"},
        {id: 2, value: "New resume available", type: "urgent"},
        {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
      ],
    };
  }

  render() {
    // Destructuring in React
    // Eg Before destructuring: <Notifications listNotifications={this.state.listNotifications}/>
    const {listNotifications, isLoggedIn, listCourses} = this.state;
    return(
      <>
        <Notifications listNotifications={listNotifications}/>
        <div className='App'>
          <Header />
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
      </>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;