import * as actions from '../actions/notificationActionTypes';
import { Map, setIn, set } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
    notifications: [],
    filter: actions.NotificationTypeFilters
});


export default function notificationReducer(state = initialState, action={type: null}) {
    switch(action.type) {
        case actions.FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data)
            return state.merge({
                notifications: normalizedData.result.map(id => ({
                    ...normalizedData.entities.notifications[id], isRead: false
                }))
            });
        case actions.MARK_AS_READ:
            return state.setIn(['notifications', action.index, isRead], true);
            
        case actions.SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
}