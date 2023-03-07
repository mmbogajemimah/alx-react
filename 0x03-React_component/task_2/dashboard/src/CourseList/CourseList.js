import React from "react";
import CourseListRow from "./CourseListRow";
import './CourseList.css'
import PropType from 'prop-types';
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => {
    return(
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell='Available courses' />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {
                    listCourses.length === 0 ?
                    <CourseListRow isHeader={false} textFirstCell='No course available yet' />
                    :
                    null
                }
                {
                    listCourses.map((val, idx) => {
                        return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id} />
                    })
                }
        
            </tbody>
        </table>
    )
}

CourseList.defaultProps = {
    listCourses: []
};

CourseList.propType = {
    listCourses: PropType.arrayOf(CourseShape)
};

export default CourseList;