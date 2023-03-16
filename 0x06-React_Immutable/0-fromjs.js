// Converts palin JS objects and arrays to immutable Maps and Lists
//Import formjs
import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
    let obj = fromJS(object)
    //console.log(obj);
    return (obj);
}
