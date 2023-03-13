import React from 'react';
import logo from '../assets/holberton_logo.jpg';
//import './Header.css';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.AppHeader)}>
      <img className={css(styles.img)} src={logo} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  )
}

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    borderBottom: '3px solid #e1484c',
    marginTop: '30px',
  },

  img: {
    width: '150px',
  },

  h1: {
    margin: 'auto auto auto 0',
    color: '#e1484c',
  }
})

export default Header;
