// Converts palin JS objects and arrays to immutable Maps and Lists
//Import formjs
import { fromJS } from 'immutable';

function getImmutableObject(object) {
    const obj = fromJS(object)
    //console.log(obj);
    return (obj);
}

// const obj1 = {
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132
// }

// getImmutableObject(obj1)