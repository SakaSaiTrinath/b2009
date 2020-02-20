import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema({
	username: { type: String, required: true, index: true, unique: true },
	passwordHash: { type: String, required: true },
	isJoined: { type: Boolean, default: false },

	// basic info
	profile_pic: { type: String },
	fullname: { type: String, required: true },
	current_status: { type: String },
	current_location: {
		country: { type: String },
		state: { type: String },
		city: { type: String }
	},
	nick_name: { type: String },
	birthdate: { type: Number },
	birthmonth: { type: String },
	gender: { type: String, required: true },
	rel_status: { type: String },
	phone_number: { type: Number },
	home_address: { type: String },
	blood_group: { type: String },
	known_lang: { type: String },
	zodiac: { type: String },
	hobbies: { type: String },
	goal: { type: String },
	basic_other: [{ field: String, value: String }],

	// 	school info
	studied_from_year: { type: String },
	studied_to_year: { type: String },
	junior_house: { type: String },
	senior_house: { type: String },
	games: [{ game_name: String, level_reached: String, no_of_reached: String }],

	// afternvavodaya
	after_navodaya: [{ title: String, duration: String, content: String }],
	after_navodaya_vis_type: { type: String, default: "all" },
	after_navodaya_rejected_list: [String],

	// social aacounts
	// social_accounts: [{	account_name: String, account_username: String, account_url: String }],
	social_accounts: {
		facebook: {
			username: { type: String },
			url: { type: String }
		},
		whatsapp: {
			number: { type: String }
		},
		twitter: {
			username: { type: String },
			url: { type: String }
		},
		email: {
			mail_address: { type: String }
		},
		instagram: {
			username: { type: String }
		},
		linkedin: {
			username: { type: String },
			url: { type: String }
		},
		youtube: {
			username: { type: String },
			url: { type: String }
		},
		pinterest: {
			username: { type: String },
			url: { type: String }
		},
		github: {
			username: { type: String },
			url: { type: String }
		}
	},
	social_accounts_vis_type: { type: String, default: "All" },
	social_accounts_rejected_list: [String],

	// favourites
	favourites: [{ field: String, value: String }],
	favourites_vis_type: { type: String, default: "All" },
	favourites_rejected_list: [String],

	// firstthings
	first_things: [{ field: String, value: String }],
	first_things_vis_type: { type: String, default: "All" },
	first_things_rejected_list: [String],

	// others
	articles_count: { type: Number, default: 0 },
	gallery_count: { type: Number, default: 0 },
	responses: [
		{
			title: String,
			message_type: String,
			message: String,
			timestamp: Date
		}
	]
});

schema.methods.isValidPassword = function isValidPassword(password) {
	return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.toAuthJSON = function toAuthJSON() {
	return {
		username: this.username,
		token: this.generateJWT()
	};
};

schema.methods.generateJWT = function generateJWT(username = null) {
	if (username) {
		return jwt.sign(
			{
				username
			},
			process.env.JWT_SECRET
		);
		// eslint-disable-next-line
	} else {
		return jwt.sign(
			{
				username: this.username
			},
			process.env.JWT_SECRET
		);
	}
};

schema.methods.isNotJoined = function isNotJoined() {
	return this.isJoined;
};

export default mongoose.model("User", schema);
