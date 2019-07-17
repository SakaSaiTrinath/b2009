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

export const fetchBasicInfo = () => dispatch =>
	api.user.fetchBasicInfo().then(basic_info => {
		dispatch(BasicInfoFetched(basic_info));
	});

export const updateBasicInfo = data => dispatch =>
	api.user.updateBasicInfo(data).then(basic_info => {
		dispatch(BasicInfoUpdated(basic_info));
	});

export const updateStatus = status => dispatch =>
	api.user.updateStatus(status).then(basic_info => {
		dispatch(BasicInfoUpdated(basic_info));
	});