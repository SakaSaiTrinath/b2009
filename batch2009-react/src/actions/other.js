import { FETCH_ALL_USERS } from "../types";
import api from "../api";

export const allUsersFetched = all_users => ({
	type: FETCH_ALL_USERS,
	all_users
});

//=======================================================
export const fetchAllUsers = () => dispatch =>
	api.user.fetchAllUsers().then(all_users => {
		dispatch(allUsersFetched(all_users));
	});

export const fetchAllUsersFull = () => dispatch =>
	api.user.fetchAllUsersFull().then(all_users => {
		dispatch(allUsersFetched(all_users));
	});