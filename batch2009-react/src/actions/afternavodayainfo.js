import {
	FETCH_AFTER_NAVODAYA_INFO,
	UPDATE_AFTER_NAVODAYA_INFO
} from "../types";
import api from "../api";

export const AterNavodayaInfoFetched = after_navodaya_info => ({
	type: FETCH_AFTER_NAVODAYA_INFO,
	after_navodaya_info
});

export const AterNavodayaInfoUpdated = after_navodaya_info => ({
	type: UPDATE_AFTER_NAVODAYA_INFO,
	after_navodaya_info
});

// ======================================================================
export const fetchAfterNavodayaInfo = username => dispatch =>
	api.user.fetchAfterNavodayaInfo(username).then(after_navodaya_info => {
		dispatch(AterNavodayaInfoFetched(after_navodaya_info));
	});

export const addNewAN = data => dispatch =>
	api.user.addNewAN(data).then(after_navodaya_info => {
		dispatch(AterNavodayaInfoUpdated(after_navodaya_info));
	});

export const deleteAN = doc => dispatch =>
	api.user.deleteAN(doc).then(after_navodaya_info => {
		dispatch(AterNavodayaInfoUpdated(after_navodaya_info));
	});

export const updateANVisibilty = visibility => dispatch =>
	api.user.updateANVisibilty(visibility).then(after_navodaya_info => {
		dispatch(AterNavodayaInfoUpdated(after_navodaya_info));
	});
