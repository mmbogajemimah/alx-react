import * as actions from '../actions/courseActionTypes';
import { Map, setIn, set} from 'immutable';
import { courseNormalizer } from '../schema/courses';

export const initialState = Map([]);

export default function courseReducer(state=initialState, action) {
        switch(action.type) {
            case actions.FETCH_COURSE_SUCCESS:
                const normData = courseNormalizer(action.data)
                Object.keys(normData).map((key) => {
                    normData[key].isSelected = false
                })
                return state.merge(normData)
                //return action.data.map((item) => ({ ...item, isSelected: false }));
                
            case actions.SELECT_COURSE:
                return setIn(state, [String(action.index), 'isSelected'], true);
                //return state.map((item) => item.id == action.index ? {...item, isSelected: true} : {...item});
            case actions.UNSELECT_COURSE:
                return setIn(state, [String(action.index), 'isSelected'], false);
                //return state.map((item) => item.id == action.index ? {...item, isSelected: false} : {...item});
            default:
                return state
        }
}