import {
	FETCH_AFTER_NAVODAYA_INFO,
	UPDATE_AFTER_NAVODAYA_INFO
} from "../types";

export default function(state = {}, action = {}) {
	switch(action.type) {
		case FETCH_AFTER_NAVODAYA_INFO:
		case UPDATE_AFTER_NAVODAYA_INFO:
			return action.after_navodaya_info;
		default:
			return state;
	}
}