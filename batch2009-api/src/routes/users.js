import express from "express";
import User from "../models/User";

import authenticate from "../middlewares/authenticate";

const router = express.Router();

router.get("/fetchBasicInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({ 
			basic_info: {
				fullname: user.fullname,
				current_status: user.current_status,
				articles_count: user.articles_count,
				gallery_count: user.gallery_count,
				nick_name: user.nick_name,
				birthdate: user.birthdate,
				birthmonth: user.birthmonth,
				gender: user.gender,
				rel_status: user.rel_status,
				phone_number: user.phone_number,
				home_address: user.home_address,
				blood_group: user.blood_group,
				known_lang: user.known_lang,
				zodiac: user.zodiac,
				hobbies: user.hobbies,
				goal: user.goal
			} 
		});
	});
});

router.post("/updateBasicInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const {
		birthmonth,
		birthdate,
		blood_group,
		date,
		gender,
		goal,
		hobbies,
		home_address,
		known_lang,
		nick_name,
		phone_number,
		rel_status,
		zodiac
	} = req.body.data;
	
	User.findOneAndUpdate(
		{ sessionId },
		{
			birthmonth,
			birthdate,
			blood_group,
			date,
			gender,
			goal,
			hobbies,
			home_address,
			known_lang,
			nick_name,
			phone_number,
			rel_status,
			zodiac	
		}
	).then(user => {
		res.json({ 
			basic_info: {
				fullname: user.fullname,
				current_status: user.current_status,
				articles_count: user.articles_count,
				gallery_count: user.gallery_count,
				birthmonth,
				birthdate,
				blood_group,
				date,
				gender,
				goal,
				hobbies,
				home_address,
				known_lang,
				nick_name,
				phone_number,
				rel_status,
				zodiac
			} 
		});
	});
});

router.post("/updateStatus", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const { status } = req.body;
	
	User.findOneAndUpdate(
		{ sessionId },
		{
			current_status: status
		}
	).then(user => {
		res.json({ 
			basic_info: {
				fullname: user.fullname,
				current_status: status,
				articles_count: user.articles_count,
				gallery_count: user.gallery_count,
				nick_name: user.nick_name,
				birthdate: user.birthdate,
				birthmonth: user.birthmonth,
				gender: user.gender,
				rel_status: user.rel_status,
				phone_number: user.phone_number,
				home_address: user.home_address,
				blood_group: user.blood_group,
				known_lang: user.known_lang,
				zodiac: user.zodiac,
				hobbies: user.hobbies,
				goal: user.goal
			}
		});
	});
});

router.get("/fetchSchoolInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({
			school_info: {
				studied_from_year: user.studied_from_year,
				studied_to_year: user.studied_to_year,
				junior_house: user.junior_house,
				senior_house: user.senior_house,
				games: user.games
			}
		});
	});
});

router.post("/updateSchoolInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const {
		studied_from_year,
		studied_to_year,
		junior_house,
		senior_house
	} = req.body.data;

	User.findOneAndUpdate(
		{ sessionId },
		{
			studied_from_year,
			studied_to_year,
			junior_house,
			senior_house	
		}
	).then(user => {
		res.json({ 
			school_info: {
				studied_from_year,
				studied_to_year,
				junior_house,
				senior_house,
				games: user.games
			} 
		});
	});
});

router.get("/fetchAfterNavodayaInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({
			after_navodaya: {
				after_navodaya: user.after_navodaya
			}
		});
	});
});

router.get("/fetchSocialAccInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({
			social_acc: {
				social_accounts: user.social_accounts
			}
		});
	});
});

router.get("/fetchFavouritesInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({
			favourites: {
				favourites: user.favourites
			}
		});
	});
});

router.get("/fetchFirstThingsInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({
			firstthings: {
				firstthings: user.first_things
			}
		});
	});
});
 

export default router;