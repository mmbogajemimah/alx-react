import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('Test App.js', () => {
  it('App without crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });

  it('div with the class App-header', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className='App-header' />))
    done()
  });

  it('div with the class App-body', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });

  it('div with the class App-footer', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className='App-footer' />))
    done();
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('Test to check that CourseLis is not displayed inside App', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

});

describe('Testing <App isLoggedIn={true} />', () => {
  // beforeEach(() => {
  //   const wrapper = shallow(<App isLoggedIn={true}/>);
  // });

  it("the Login component is not included", () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it('the CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('CourseList').exists());
  })
})
