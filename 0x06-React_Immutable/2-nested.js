import { Map } from 'immutable';

export default function accessImmutableObject (object, array) {
  const obj1 = Map(object);
  // console.log(obj1)
  // console.log(obj1.getIn(array, undefined));
  return (obj1.getIn(array, undefined));
}

// accessImmutableObject({
//     name: {
//          first: "Guillaume",
//          last: "Salva"
//     }
// }, ['name', 'first'])
