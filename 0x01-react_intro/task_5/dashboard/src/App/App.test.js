import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true)
    });

    it('should render a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').length).toBe(1);
    });

    it('should render a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    it('should render a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').length).toBe(1);
    });
});
