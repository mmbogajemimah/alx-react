import React from "react";
import { shallow } from 'enzyme';
import CourseList from './CourseList';
//import CourseListRow from "./CourseListRow";

describe('Testing <CourseList />', () => {
    it('Checking that it renders CourseList component without crashing', () => {
        let wrapper = shallow(<CourseList />);
        expect(wrapper.exists());
    });

    it('Checking that it renders 5 different rows', () => {
        let wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
})