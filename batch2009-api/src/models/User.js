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
	current_status: { type: String, default: '---' },
	current_location: {
		country: { type: String, default: '---' },
		state: { type: String, default: '---' },
		city: { type: String, default: '---' }
	},
	nick_name: { type: String, default: '---' },
	birthdate: { type: Number, default: 1 },
	birthmonth: { type: String, default: 1 },
	gender: { type: String, default: '---', required: true },
	rel_status: { type: String, default: '---' },
	phone_number: { type: Number, default: 9876543210 },
	home_address: { type: String, default: '---' },
	blood_group: { type: String, default: '---' },
	known_lang: { type: String, default: '---' },
	zodiac: { type: String, default: '---' },
	hobbies: { type: String, default: '---' },
	goal: { type: String, default: '---' },
	basic_other: [{ field: String, value: String }],
	
	// 	school info
	studied_from_year: { type: String, default: 2000 },
	studied_to_year: { type: String, default: 3000 },
	junior_house: { type: String, default: '---' },
	senior_house: { type: String, default: '---' },
	games: [{ game_name: String, level_reached: String, no_of_reached: String }],
	
	// afternvavodaya
	after_navodaya: [{ title: String, duration: String, content: String }],
	after_navodaya_vis_type: { type: String, default: "all" },
	after_navodaya_rejected_list: [String],
	
	// social aacounts
	// social_accounts: [{	account_name: String, account_username: String, account_url: String }],
	social_accounts: {
		facebook: {
			username: { type: String, default: "---"},
			url: { type: String, default: "---"}
		},
		whatsapp: {
			number: { type: String, default: 9876543210}
		},
		twitter: {
			username: { type: String, default: "---"},
			url: { type: String, default: "---"}
		},
		email: {
			mail_address: { type: String, default: "---"}
		},
		instagram: {
			username: { type: String, default: "---"}
		},
		linkedin: {
			username: { type: String, default: "---"},
			url: { type: String, default: "---"}
		},
		youtube: {
			username: { type: String, default: "---"},
			url: { type: String, default: "---"}
		},
		pinterest: {
			username: { type: String, default: "---"},
			url: { type: String, default: "---"}
		},
		github: {
			username: { type: String, default: "---"},
			url: { type: String, default: "---"}
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
	gallery_count: { type: Number, default: 0 }
});

schema.methods.isValidPassword = function isValidPassword(password) {
	return bcrypt.compareSync(password, this.passwordHash);
};

schema.methods.toAuthJSON = function toAuthJSON() {
	return {
		username: this.username,
		token: this.generateJWT()
	}
};

schema.methods.generateJWT = function generateJWT(username = null) {
	if(username) {
		return jwt.sign(
			{
				username
			},
			process.env.JWT_SECRET
		);		
	} else {
		return jwt.sign(
			{
				username: this.username
			},
			process.env.JWT_SECRET
		);
	}
}

export default mongoose.model("User", schema);