import {
	FETCH_SOCIAL_ACC_INFO
} from "../types";

export default function(state = {}, action = {}) {
	switch(action.type) {
		case FETCH_SOCIAL_ACC_INFO:
			return action.social_acc;
		default:
			return state;
	}
}