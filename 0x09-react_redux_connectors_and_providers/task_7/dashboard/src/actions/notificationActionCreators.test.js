import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe('notificationActionCreators', () => {
    describe('Mark as Read', () => {
        it('should create right action for mark as read', () => {
            const index = 1;
            const expectedAction = {
                type: MARK_AS_READ,
                index: index,
            };
            expect(markAsRead(index)).toEqual(expectedAction)
        });
    });

    describe('Set Notification Filter', () => {
        it("should create right action for notification filter", () => {
            expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual({
                type: SET_TYPE_FILTER,
                filter: "DEFAULT",
            })
        })
    })
})