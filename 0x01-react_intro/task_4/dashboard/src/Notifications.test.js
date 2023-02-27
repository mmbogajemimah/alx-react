import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notifications from './Notifications';

Enzyme.configure({ adapter: new Adapter() });

describe('Notifications component', () => {
    it('should render withou crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.existts()).toBe(true);
    });

    it('should render three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('should render the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain("Here is the list of notifications");
    });
});