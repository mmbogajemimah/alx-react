import { fromJS } from 'immutable';

function getImmutableObject(object) {
    let obj = fromJS(object)
    //console.log(obj);
    return (obj);
}
