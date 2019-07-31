import axios from "axios";

export default {
	user: {
		login: credentials =>
			axios.post("/api/auth", { credentials }).then(res => res.data.user),

		// Basic
		fetchBasicInfo: () =>
			axios.get("/api/users/fetchBasicInfo").then(res => res.data.basic_info),
		updateBasicInfo: data =>
			axios.post("/api/users/updateBasicInfo", { data }).then(res => res.data.basic_info),
		updateStatus: status =>
			axios.post("/api/users/updateStatus", { status }).then(res => res.data.basic_info),

		// School info
		fetchSchoolInfo: () =>
			axios.get("/api/users/fetchSchoolInfo").then(res => res.data.school_info),
		updateSchoolInfo: data =>
			axios.post("/api/users/updateSchoolInfo", { data }).then(res => res.data.school_info),
		addNewGame: data =>
			axios.post("/api/users/addNewGame", { data }).then(res => res.data.school_info),
		deleteGame: doc =>
			axios.post("/api/users/deleteGame", { doc }).then(res => res.data.school_info),

		// After Navodaya info
		fetchAfterNavodayaInfo: () =>
			axios.get("/api/users/fetchAfterNavodayaInfo").then(res => res.data.after_navodaya),
		addNewAN: data =>
			axios.post("/api/users/addNewAN", { data }).then(res => res.data.after_navodaya),
		deleteAN: data =>
			axios.post("/api/users/deleteAN", { data }).then(res => res.data.after_navodaya),

		// Social info
		fetchSocialAccInfo: () =>
			axios.get("/api/users/fetchSocialAccInfo").then(res => res.data.social_acc),


		// Favourites info
		fetchFavouritesInfo: () =>
			axios.get("/api/users/fetchFavouritesInfo").then(res => res.data.favourites),

		// Firstthings info
		fetchFirstThingsInfo: () =>
			axios.get("/api/users/fetchFirstThingsInfo").then(res => res.data.firstthings)
	}
}