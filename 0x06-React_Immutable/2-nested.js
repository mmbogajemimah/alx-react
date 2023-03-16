import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const obj1 = fromJS(object);

  return obj1.getIn(array, undefined);
};

export default accessImmutableObject;
