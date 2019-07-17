import {
	FETCH_SCHOOL_INFO,
	UPDATE_SCHOOL_INFO
} from "../types";

export default function(state = {}, action = {}) {
	switch(action.type) {
		case FETCH_SCHOOL_INFO:
		case UPDATE_SCHOOL_INFO:
			return action.school_info;
		default:
			return state;
	}
}