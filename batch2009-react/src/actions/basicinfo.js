import { FETCH_BASIC_INFO, UPDATE_BASIC_INFO } from "../types";
import api from "../api";

export const BasicInfoFetched = basic_info => ({
	type: FETCH_BASIC_INFO,
	basic_info
});

export const BasicInfoUpdated = basic_info => ({
	type: UPDATE_BASIC_INFO,
	basic_info
});

// =======================================================
export const fetchBasicInfo = username => dispatch =>
	api.user.fetchBasicInfo(username).then(basic_info => {
		dispatch(BasicInfoFetched(basic_info));
	});

export const updateBasicInfo = data => dispatch =>
	api.user.updateBasicInfo(data).then(basic_info => {
		dispatch(BasicInfoUpdated(basic_info));
	});

export const updateStatus = data => dispatch =>
	api.user.updateStatus(data).then(basic_info => {
		dispatch(BasicInfoUpdated(basic_info));
	});

export const uploadProfilePic = formData => dispatch =>
	api.user.uploadProfilePic(formData).then(basic_info => {
		dispatch(BasicInfoUpdated(basic_info));
	});
