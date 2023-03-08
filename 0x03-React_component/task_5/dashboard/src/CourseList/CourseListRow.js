import React from "react";
import PropTypes from 'prop-types';


const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    if(isHeader) {
        if (textSecondCell === null) {
            return (
                <tr>
                    <th colSpan='2'>{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    //textSecondCell: PropTypes.string | PropTypes.number
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default CourseListRow;