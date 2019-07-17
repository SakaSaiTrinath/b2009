import axios from "axios";

export default {
	user: {
		login: credentials =>
			axios.post("/api/auth", { credentials }).then(res => res.data.user),
		fetchBasicInfo: () =>
			axios.get("/api/users/fetchBasicInfo").then(res => res.data.basic_info),
		updateBasicInfo: data =>
			axios.post("/api/users/updateBasicInfo", { data }).then(res => res.data.basic_info),
		updateStatus: status =>
			axios.post("/api/users/updateStatus", { status }).then(res => res.data.basic_info),
		fetchSchoolInfo: () =>
			axios.get("/api/users/fetchSchoolInfo").then(res => res.data.school_info),
		updateSchoolInfo: data =>
			axios.post("/api/users/updateSchoolInfo", { data }).then(res => res.data.school_info),
		fetchAfterNavodayaInfo: () =>
			axios.get("/api/users/fetchAfterNavodayaInfo").then(res => res.data.after_navodaya),
		fetchSocialAccInfo: () =>
			axios.get("/api/users/fetchSocialAccInfo").then(res => res.data.social_acc),
		fetchFavouritesInfo: () =>
			axios.get("/api/users/fetchFavouritesInfo").then(res => res.data.favourites),
		fetchFirstThingsInfo: () =>
			axios.get("/api/users/fetchFirstThingsInfo").then(res => res.data.firstthings)
	}
}