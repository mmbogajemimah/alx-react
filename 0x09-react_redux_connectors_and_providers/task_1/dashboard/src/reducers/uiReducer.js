/* we first import the Map object from Immutable.js and use it to create the 
initial state. We also create a Map object for the user property, although it's 
currently an empty object.

Inside the reducer function, we use the set method of the Map object to update 
the corresponding properties of the state. This returns a new Map object with 
the updated property, while leaving the rest of the state unchanged.
*/
import { Map } from 'immutable';
import * as actions from '../actions/uiActionTypes';


const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({})
});

export default function uiReducer(state = initialState, action) {
    switch(action.type) {
        case actions.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true)
        
        case actions.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false)
        
        case actions.LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true)
        
        case actions.LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false)
        
        default:
            return state
    }
}
