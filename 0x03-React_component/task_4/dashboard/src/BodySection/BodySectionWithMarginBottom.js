import React, { Component } from "react";

import './BodySection';
import BodySection from "./BodySection";
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="bodySectionWithMargin">
                <BodySection {... this.props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.defaultProps = {
    children: <React.Fragment />
};

BodySectionWithMarginBottom.prpTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};

export default BodySectionWithMarginBottom;