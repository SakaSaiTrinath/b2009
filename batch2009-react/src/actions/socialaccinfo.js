import { FETCH_SOCIAL_ACC_INFO, UPDATE_SOCIAL_ACC_INFO } from "../types";
import api from "../api";

export const SocialAccInfoFetched = social_acc => ({
	type: FETCH_SOCIAL_ACC_INFO,
	social_acc
});

export const SocialAccInfoUpdated = social_acc => ({
	type: UPDATE_SOCIAL_ACC_INFO,
	social_acc
});

// ============================================================
export const fetchSocialAccInfo = username => dispatch =>
	api.user.fetchSocialAccInfo(username).then(social_acc => {
		dispatch(SocialAccInfoFetched(social_acc));
	});

export const updateSocialAccInfo = data => dispatch =>
	api.user.updateSocialAccInfo(data).then(social_acc => {
		dispatch(SocialAccInfoUpdated(social_acc));
	});

export const updateSocialVisibilty = visibility => dispatch =>
	api.user.updateSocialVisibilty(visibility).then(social_acc => {
		dispatch(SocialAccInfoUpdated(social_acc));
	});
