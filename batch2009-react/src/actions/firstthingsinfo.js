import { FETCH_FIRST_THINGS_INFO } from "../types";
import api from "../api";

export const FirstThingsInfoFetched = firstthings => ({
	type: FETCH_FIRST_THINGS_INFO,
	firstthings
});

export const fetchFirstThingsInfo = () => dispatch =>
	api.user.fetchFirstThingsInfo().then(firstthings => {
		dispatch(FirstThingsInfoFetched(firstthings));
	});
