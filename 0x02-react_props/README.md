## 0x02-react_props 

### Creating a Basic component
To create a basic component in React, you can follow these steps:

    Create a new file for your component: Create a new file in your project's src directory for your component. Name the file with a capitalized version of your component's name, followed by .js. For example, if your component is called MyComponent, name the file MyComponent.js.

    Import the necessary libraries: Import the necessary libraries for creating a React component. For example, import React and ReactDOM:

#### javascript

    import React from 'react';
    import ReactDOM from 'react-dom';

    Define your component: Define your component using a function or class. For example:

#### javascript

    function MyComponent(props) {
    return <h1>Hello, {props.name}!</h1>;
    }

In this example, we're defining a function component called MyComponent that takes in a props object and returns an h1 element that displays a message using the name prop.

Export your component: Export your component so that it can be used in other parts of your application. For example:

#### javascript

    export default MyComponent;

Use your component: Use your component in other parts of your application. For example, you can render your component using ReactDOM.render():

#### javascript

    import React from 'react';
    import ReactDOM from 'react-dom';
    import MyComponent from './MyComponent';

    ReactDOM.render(<MyComponent name="John" />, document.getElementById('root'));

In this example, we're using ReactDOM.render() to render our MyComponent component with a name prop of "John" to a DOM element with the ID of "root".

That's it! You've now created a basic component in React. You can build on this by adding more functionality, styling, or interactivity to your component as needed.

### Write the tests for each component 
To develop your tests faster, you can watch them. The test suite will run for every change you make:
    Add the following script to package.json: "test-watch": "jest --watch"
    Run your suite using npm run test-watch

Testing is an important part of building React applications. Here are some general steps for writing tests for each component in React:

Choose a testing framework: There are several testing frameworks available for React such as Jest, Mocha, and Enzyme. Choose the one that best fits your needs.

Create a test file: Create a new file in your project with the extension .test.js. For example, if you have a component named MyComponent, create a file named MyComponent.test.js.

Import the necessary libraries: Import the libraries you need to test your component. For example, if you're using Jest, import React and ReactDOM:
    import React from 'react';
    import ReactDOM from 'react-dom';

Import the component: Import the component you want to test:

#### javascript

    import MyComponent from './MyComponent';

Write test cases: Write test cases to ensure that the component works as expected. Here's an example:

#### javascript

    describe('MyComponent', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MyComponent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('displays the correct text', () => {
        const wrapper = shallow(<MyComponent />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('Hello, World!');
    });
    });

In this example, we're using Jest to test the MyComponent component. We've written two test cases: one to ensure that the component renders without crashing, and another to ensure that it displays the correct text.

Run the tests: Run the tests using your chosen testing framework. For example, if you're using Jest, run the following command in your terminal:

    npm test

This will run all the test cases you've written for your React components.

Keep in mind that this is a basic example, and there are many other types of tests you can write for your React components. Testing is an ongoing process, and you should aim to write tests for each component to ensure that your application works as expected.


#### Props types & Default props & Shapes 
To work on this task, install prop-types with npm first

In React, props are used to pass data from a parent component to a child component. Props can be of various types, and it's important to define the types and default values for the props to ensure that your component works correctly.

Here are some ways to define and set the types and default values of props in React:

#### PropTypes:
PropTypes is a library that allows you to define the types of props passed to a component. PropTypes library provides you with different types to define props like string, number, array, object, boolean, etc. This library will help you in type-checking of props at runtime and will also log the error message to the console if the type of prop is not as expected.

Here's an example of how to use PropTypes:

#### javascript

    import PropTypes from 'prop-types';

    function MyComponent(props) {
    return <div>{props.message}</div>;
    }

    MyComponent.propTypes = {
    message: PropTypes.string.isRequired,
    };

In this example, we're using PropTypes to define the type of the message prop as a string. We're also using the isRequired property to ensure that the prop is required.

#### Default Props:
Default Props are used to set a default value for a prop in case it's not passed from the parent component. You can define default values using the defaultProps property.

Here's an example:

#### javascript

    function MyComponent(props) {
    return <div>{props.message}</div>;
    }

    MyComponent.defaultProps = {
    message: 'Hello, World!',
    };

In this example, we're setting the default value of the message prop to 'Hello, World!'. If the prop is not passed from the parent component, this default value will be used.

#### Shapes:
If your component's prop is an object, you can use shapes to define the shape of the object. This will help you in defining the types of nested objects and also help in checking for required and default values.

Here's an example:

#### javascript

    import PropTypes from 'prop-types';

    function MyComponent(props) {
        return (
            <div>
            <p>{props.user.name}</p>
            <p>{props.user.age}</p>
            </div>
        );
        }

        MyComponent.propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
        }).isRequired,
        };

In this example, we're using the shape method of PropTypes to define the shape of the user prop. The user prop is an object with a name and age property. We're using the isRequired property to ensure that both name and age are required.

Overall, defining and setting the types and default values of props is an important part of writing React components. It helps to ensure that your component works correctly and is more maintainable in the long run.
