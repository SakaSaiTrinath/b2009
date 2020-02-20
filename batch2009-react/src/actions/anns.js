import { FETCH_ANNOUNCEMENTS } from "../types";
import api from "../api";

export const announcementsFetched = anns => ({
  type: FETCH_ANNOUNCEMENTS,
  anns
});

// ---------------------------------------------------------

export const fetchAnnouncements = params => dispatch =>
  api.anns.fetchAnnouncements(params).then(anns => {
    dispatch(announcementsFetched(anns));
  });
