import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from 'react-redux';
import * as uiActionCreators from '../actions/uiActionCreators'

function Header(props) {
  const {user, logout} = props;
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      {
        (user && (typeof user === 'object' ? Object.keys(user).length !== 0: false))
        &&
        <section id="logoutSection">
          <h2>Welcome<strong>{user.email}</strong><em><a href="#" onClick={logout}>(logout)</a></em></h2>
        </section>
      }
    </>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

export function mapStateToProps(state) {
  return {
    user: state.get('user')
  }
}

export const mapDispatchToProps = {
  logout: uiActionCreators.logout,
}

export default connect(mapStateToProps)(Header);
