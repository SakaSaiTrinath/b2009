import { FETCH_ANNOUNCEMENTS } from "../types";

export default function(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS:
      return {
        announcements:
          state.announcements &&
          /* eslint-disable-next-line */
          state.announcements[0]._id !== action.anns.announcements[0]._id
            ? [...state.announcements, ...action.anns.announcements]
            : action.anns.announcements,
        metadata: action.anns.metadata
      };
    default:
      return state;
  }
}
