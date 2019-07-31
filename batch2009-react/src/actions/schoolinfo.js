import { FETCH_SCHOOL_INFO, UPDATE_SCHOOL_INFO } from "../types";
import api from "../api";

export const SchoolInfoFetched = school_info => ({
	type: FETCH_SCHOOL_INFO,
	school_info
});

export const SchoolInfoUpdated = school_info => ({
	type: UPDATE_SCHOOL_INFO,
	school_info
});

// -----------------------------------------------------------

export const fetchSchoolInfo = () => dispatch =>
	api.user.fetchSchoolInfo().then(school_info => {
		dispatch(SchoolInfoFetched(school_info));
	});

export const updateSchoolInfo = data => dispatch =>
	api.user.updateSchoolInfo(data).then(school_info => {
		dispatch(SchoolInfoUpdated(school_info));
	});

export const addNewGame = data => dispatch =>
	api.user.addNewGame(data).then(school_info => {
		dispatch(SchoolInfoUpdated(school_info));
	});

export const deleteGame = doc => dispatch =>
	api.user.deleteGame(doc).then(school_info => {
		dispatch(SchoolInfoUpdated(school_info));
	});
