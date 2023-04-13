import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe('uiActionCreators', () => {
    it('should return the type and user object', () => {
        const email = "test@gmail.com";
        const password = 100200;

        expect(login(email, password)).toEqual({
            type: LOGIN,
            user: { email: "test@gmail.com", password: 100200},
        });
    });

    it("should return the correct logout type", () => {
        expect(logout()).toEqual({
            type: LOGOUT
        });
    });

    it("displayNotificationDrawer should return the correc type", () => {
        expect(displayNotificationDrawer()).toEqual({
            type: DISPLAY_NOTIFICATION_DRAWER
        });
    });

    it("hideNotificationDrawer should return the correct type", () => {
        expect(hideNotificationDrawer()).toEqual({
            type: HIDE_NOTIFICATION_DRAWER
        })
    })
})