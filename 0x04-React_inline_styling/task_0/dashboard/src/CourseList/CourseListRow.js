import React from "react";
import PropTypes from 'prop-types';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    const tableRowStyle = {
        background: '#f5f5f5ab',
    }
    const tableHeaderStyle = {
        background: '#deb5b545',
    }

    const selectedStyle = isHeader ? tableHeaderStyle : tableRowStyle;

    return (
        <tr style={selectedStyle}>
            {
                isHeader ?
                    textFirstCell === null ?
                        <th colSpan='2'>{textFirstCell}</th>
                    :
                        <>
                            <th>{textFirstCell}</th>
                            <th>{textSecondCell}</th>
                        </>
                    :
                        <>
                            <td>{textFirstCell}</td>
                            <td>{textSecondCell}</td>
                        </>
            }
        </tr>
    )
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