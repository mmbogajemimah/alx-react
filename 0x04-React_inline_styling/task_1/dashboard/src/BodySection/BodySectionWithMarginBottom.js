import React, { Component } from 'react'
import BodySection from './BodySection';
//import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css.apply(styles.bodySectionWithMargin)}>
        <BodySection {...this.props}/>
      </div>
    );
  }
}

BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  }
})

export default BodySectionWithMarginBottom;
