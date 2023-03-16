import { Map } from 'immutable';

export default function accessImmutableObject (object, array) {
  const obj1 = Map(object);
  return (obj1.getIn(array, undefined));
}
