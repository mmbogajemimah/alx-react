import React from 'react';
//import './Login.css';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input className={css(styles.AppBodyInput)} type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  AppBody: {
    padding: '36px 24px',
  },

  AppBodyInput: {
    margin: '0 16px 0 8px',
  }
})

export default Login;
