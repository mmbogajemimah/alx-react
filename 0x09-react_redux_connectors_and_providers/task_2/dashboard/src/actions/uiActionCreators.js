import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

export function login(email, password) {
    return {
        type: LOGIN,
        user : { email, password },
    }
}
export const boundLogin = (email, password) => dispatch(login(email, password));

export function logout() {
    return {
        type: LOGOUT,
    }
}
export const boundLogout = (email, password) => dispatch(logout(email, password));


export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    }
}
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    }
}
export const boundHandleDisplayDrawer = () => dispatch(hideNotificationDrawer());

export function loginSucess() {
    return{
        type: LOGIN_SUCCESS
    }
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    }
}

export function loginRequest(email, password) {
    return (dispatch) => {
        boundLogin(email, password);

        return fetch('http://localhost:8564/login-success.json')
        .then((res) => res.json())
        .then((json) => dispatch(loginSucess()))
        .catch((error) => dispatch(loginFailure()));
    };
}