import axios from "axios";

const config = {
	headers: {
		"content-type": "multipart/form-data"
	}
};

export default {
	user: {
		login: credentials =>
			axios.post("/api/auth", { credentials }).then(res => res.data.user),
		resetUsername: data =>
			axios.put("/api/auth/resetusername", { data }).then(res => res.data.user),
		resetPassword: data =>
			axios.put("/api/auth/resetPassword", { data }).then(res => res.data),

		// Basic
		fetchBasicInfo: username =>
			axios
				.get(`/api/users/fetchBasicInfo/${username}`)
				.then(res => res.data.basic_info),
		updateBasicInfo: data =>
			axios
				.post("/api/users/updateBasicInfo", { data })
				.then(res => res.data.basic_info),
		updateStatus: data =>
			axios
				.post("/api/users/updateStatus", { data })
				.then(res => res.data.basic_info),
		uploadProfilePic: formData =>
			axios
				.post("/api/users/uploadProfilePic", formData, config)
				.then(res => res.data.basic_info),

		// School info
		fetchSchoolInfo: username =>
			axios
				.get(`/api/users/fetchSchoolInfo/${username}`)
				.then(res => res.data.school_info),
		updateSchoolInfo: data =>
			axios
				.post("/api/users/updateSchoolInfo", { data })
				.then(res => res.data.school_info),
		addNewGame: data =>
			axios
				.post("/api/users/addNewGame", { data })
				.then(res => res.data.school_info),
		deleteGame: doc =>
			axios
				.post("/api/users/deleteGame", { doc })
				.then(res => res.data.school_info),

		// After Navodaya info
		fetchAfterNavodayaInfo: username =>
			axios
				.get(`/api/users/fetchAfterNavodayaInfo/${username}`)
				.then(res => res.data.after_navodaya),
		addNewAN: data =>
			axios
				.post("/api/users/addNewAN", { data })
				.then(res => res.data.after_navodaya),
		deleteAN: data =>
			axios
				.post("/api/users/deleteAN", { data })
				.then(res => res.data.after_navodaya),
		updateANVisibilty: visibility =>
			axios
				.post("/api/users/updateANVisibilty", { visibility })
				.then(res => res.data.after_navodaya),

		// Social info
		fetchSocialAccInfo: username =>
			axios
				.get(`/api/users/fetchSocialAccInfo/${username}`)
				.then(res => res.data.social_acc),
		updateSocialAccInfo: data =>
			axios
				.post("/api/users/updateSocialAccInfo", { data })
				.then(res => res.data.social_acc),
		updateSocialVisibilty: visibility =>
			axios
				.post("/api/users/updateSocialVisibilty", { visibility })
				.then(res => res.data.social_acc),

		// Favourites info
		fetchFavouritesInfo: username =>
			axios
				.get(`/api/users/fetchFavouritesInfo/${username}`)
				.then(res => res.data.favourites),
		updateFavouritesInfo: data =>
			axios
				.post("/api/users/updateFavouritesInfo", { data })
				.then(res => res.data.favourites),
		addNewFieldInFavourites: data =>
			axios
				.post("/api/users/addNewFieldInFavourites", { data })
				.then(res => res.data.favourites),
		deleteFavField: data =>
			axios
				.post("/api/users/deleteFavField", { data })
				.then(res => res.data.favourites),
		updateFavVisibilty: visibility =>
			axios
				.post("/api/users/updateFavVisibilty", { visibility })
				.then(res => res.data.favourites),

		// Firstthings info
		fetchFirstThingsInfo: username =>
			axios
				.get(`/api/users/fetchFirstThingsInfo/${username}`)
				.then(res => res.data.firstthings),
		updateFirstThingsInfo: data =>
			axios
				.post("/api/users/updateFirstThingsInfo", { data })
				.then(res => res.data.firstthings),
		addNewFieldInFirstThings: data =>
			axios
				.post("/api/users/addNewFieldInFirstThings", { data })
				.then(res => res.data.firstthings),
		deleteFTField: data =>
			axios
				.post("/api/users/deleteFTField", { data })
				.then(res => res.data.firstthings),
		updateFTVisibilty: visibility =>
			axios
				.post("/api/users/updateFTVisibilty", { visibility })
				.then(res => res.data.firstthings),

		// other
		fetchAllUsers: () =>
			axios.get("/api/users/fetchAllUsers").then(res => res.data.all_users),
		fetchAllUsersFull: () =>
			axios.get("/api/users/fetchAllUsersFull").then(res => res.data.all_users),
		sendUserResponse: data =>
			axios
				.post("/api/users/sendUserResponse", data)
				.then(res => res.data.message)
	},
	locations: {
		fetchCountries: () =>
			axios.post("/api/locations/countries").then(res => res.data.countries),
		fetchStates: country =>
			axios
				.post(`/api/locations/states/${country}`)
				.then(res => res.data.states),
		fetchCities: (country, state) =>
			axios
				.post(`/api/locations/cities/${country}/${state}`)
				.then(res => res.data.cities)
	},
	anns: {
		fetchAnnouncements: params =>
			axios.get("/api/ann/", params).then(res => res.data)
	}
};
