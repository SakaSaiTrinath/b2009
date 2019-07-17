import { FETCH_AFTER_NAVODAYA_INFO } from "../types";
import api from "../api";

export const AterNavodayaInfoFetched = after_navodaya_info => ({
	type: FETCH_AFTER_NAVODAYA_INFO,
	after_navodaya_info
});

export const fetchAfterNavodayaInfo = () => dispatch =>
	api.user.fetchAfterNavodayaInfo().then(after_navodaya_info => {
		dispatch(AterNavodayaInfoFetched(after_navodaya_info));
	});
