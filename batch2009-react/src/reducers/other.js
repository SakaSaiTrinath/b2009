import {
	FETCH_ALL_USERS
} from "../types";

const defaultStore = {
	all_users: []
};

export default function(state = defaultStore, action = {}) {
	switch(action.type) {
		case FETCH_ALL_USERS:
			return { ...state, all_users: action.all_users};
		default:
			return state;
	}
}