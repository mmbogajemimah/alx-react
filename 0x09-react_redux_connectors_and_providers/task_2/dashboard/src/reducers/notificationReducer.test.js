import notificationReducer, {initialState} from "./notificationReducer";
import * as actions from '../actions/notificationActionTypes';

describe ('notificationReducer', () => {
    it('Tests the default state returns the initialstate', () => {
        const res = notificationReducer(undefined, {});
        expect(res).toEqual(initialState);
    });

    it('Test that FETCH_NOTIFICATIONS_SUCCESS sends the list of notifications in a data attribute', () => {
        const action = {
            type: actions.FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available"
                },
                {
                    id: 3,
                    type: "urgent",
                    value: "New data available"
                }
            ]
        };
        const expected = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 2,
                    isRead: false,
                    type: "urgent",
                    value: "New resume available"
                },
                {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                }
            ]
        };

        const res = notificationReducer(undefined, action);
        expect(res).toEqual(expected);
    });

    it('MARK_AS_READ', () => {
        const initialState = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: false,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ]
        };

        const action = {
            type: actions.MARK_AS_READ,
            index: 2,
        };

        const expected = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: true,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        };
        const res = notificationReducer(initialState, action);
        expect(res).toEqual(expected);
    });

    it('SET_TYPE_FILTER', function () {
        const initialState = {
          filter: 'DEFAULT',
          notifications: [
            {
              id: 1,
              isRead: false,
              type: 'default',
              value: 'New course available',
            },
            {
              id: 2,
              isRead: false,
              type: 'urgent',
              value: 'New resume available',
            },
            {
              id: 3,
              isRead: false,
              type: 'urgent',
              value: 'New data available',
            },
          ],
        };
    
        const action = {
          type: SET_TYPE_FILTER,
          filter: 'URGENT',
        };
    
        const expected = {
          filter: 'URGENT',
          notifications: [
            {
              id: 1,
              isRead: false,
              type: 'default',
              value: 'New course available',
            },
            {
              id: 2,
              isRead: false,
              type: 'urgent',
              value: 'New resume available',
            },
            {
              id: 3,
              isRead: false,
              type: 'urgent',
              value: 'New data available',
            },
          ],
        };
    
        const state = notificationReducer(initialState, action);
        expect(state).toEqual(expected);
      });
})