import { FETCH_SOCIAL_ACC_INFO } from "../types";
import api from "../api";

export const SocialAccInfoFetched = social_acc => ({
	type: FETCH_SOCIAL_ACC_INFO,
	social_acc
});

export const fetchSocialAccInfo = () => dispatch =>
	api.user.fetchSocialAccInfo().then(social_acc => {
		dispatch(SocialAccInfoFetched(social_acc));
	});
