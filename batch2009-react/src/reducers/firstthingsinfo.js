import {
	FETCH_FIRST_THINGS_INFO
} from "../types";

export default function(state = {}, action = {}) {
	switch(action.type) {
		case FETCH_FIRST_THINGS_INFO:
			return action.firstthings;
		default:
			return state;
	}
}