import { FETCH_ANNOUNCEMENTS } from "../types";

export default function(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS:
      return {
        // state.announcements
        announcements: state.announcements
          ? [...state.announcements, ...action.anns.announcements]
          : action.anns.announcements,
        // ? state.announcements.concat(action.anns.announcements)
        metadata: action.anns.metadata
      };
    default:
      return state;
  }
}
