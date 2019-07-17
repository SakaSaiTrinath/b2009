import {
	FETCH_BASIC_INFO,
	UPDATE_BASIC_INFO
} from "../types";

export default function(state = {}, action = {}) {
	switch(action.type) {
		case FETCH_BASIC_INFO:
		case UPDATE_BASIC_INFO:
			return action.basic_info;
		default:
			return state;
	}
}