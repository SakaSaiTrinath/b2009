import {
	FETCH_FAVOURITES_INFO,
	UPDATE_FAVOURITES_INFO
} from "../types";

export default function(state = {}, action = {}) {
	switch(action.type) {
		case FETCH_FAVOURITES_INFO:
		case UPDATE_FAVOURITES_INFO:
			return action.favourites;
		default:
			return state;
	}
}