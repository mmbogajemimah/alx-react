// Converts palin JS objects and arrays to immutable Maps and Lists

//Import formjs
const { fromJS } = require('immutable')

// let obj1 = {
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132
// }

function getImmutableObject(obj) {
    return (fromJS(obj));
}

//getImmutableObject(obj1);
