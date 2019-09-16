import { USER_LOGGED_IN, USER_LOGGED_OUT, USERNAME_RESETTED } from "../types";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";
import api from "../api";

export const userLoggedIn = user => ({
	type: USER_LOGGED_IN,
	user
});

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
});

export const usernameResetted = user => ({
	type: USERNAME_RESETTED,
	user
});

export const login = credentials => dispatch =>
	api.user.login(credentials).then(user => {
		const toStore = JSON.stringify(user);
		localStorage.batch2009 = toStore;
		setAuthorizationHeader(user.token);
		dispatch(userLoggedIn(user));
	});

export const logout = () => dispatch => {
	setAuthorizationHeader();
	dispatch(userLoggedOut());
	localStorage.removeItem("batch2009");
};

export const resetUsername = data => dispatch =>
	api.user.resetUsername(data).then(user => {
		const toStore = JSON.stringify(user);
		localStorage.batch2009 = toStore;
		setAuthorizationHeader(user.token);
		dispatch(usernameResetted(user));
	});

export const resetPassword = data => () =>
	api.user.resetPassword(data).then(data => data);