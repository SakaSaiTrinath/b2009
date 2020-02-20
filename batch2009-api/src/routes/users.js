import express from "express";
import multer from "multer";
// import path from "path";
import fs from "fs";
// import { map } from "p-iteration";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

import User from "../models/User";
import authenticate from "../middlewares/authenticate";

const router = express.Router();
dotenv.config();

// Setting storage engine
const storage = multer.diskStorage({
	destination: "./public/uploads/",
	filename: (req, file, cb) => {
		const filePath = `./public/uploads/${file.originalname}`;
		const mime = [".jpeg", ".png", ".jpg"];
		for (let i = 0; i < mime.length; i += 1) {
			const fileWithType = `.${filePath.split(".")[1]}${mime[i]}`;
			if (fs.existsSync(fileWithType)) {
				fs.unlinkSync(fileWithType);
				break;
			}
		}
		cb(null, file.originalname);
	}
});

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		type: "OAuth2",
		user: process.env.NODEMAILER_EMAIL,
		clientId: process.env.NODEMAILER_CLIENT_ID,
		clientSecret: process.env.NODEMAILER_CLIENT_SECRET,
		refreshToken: process.env.NODEMAILER_REFRESH_TOKEN,
		accessToken: process.env.NODEMAILER_ACCESS_TOKEN
	}
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg"
	) {
		cb(null, true);
	} else {
		// rejects storing a file
		cb(null, false);
	}
};

// Init Upload
const upload = multer({
	storage,
	limits: { fileSize: 1024 * 1024 * 5 },
	fileFilter
});

// Profile Pic upload
router.post(
	"/uploadProfilePic",
	authenticate,
	upload.single("profile_pic"),
	(req, res) => {
		const { username } = req.currentUser;
		const imagePath = req.file.originalname;
		User.findOneAndUpdate({ username }, { profile_pic: imagePath }).then(
			user => {
				res.status(200).json({
					basic_info: {
						fullname: user.fullname,
						profile_pic: imagePath,
						current_status: user.current_status,
						current_location: user.current_location,
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
			}
		);
	}
);

// Basic info
router.get("/fetchBasicInfo/:username", authenticate, (req, res) => {
	const { username } = req.params;
	User.findOne({ username })
		.then(user => {
			res.json({
				basic_info: {
					fullname: user.fullname,
					profile_pic: user.profile_pic,
					current_status: user.current_status,
					current_location: user.current_location,
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
		})
		.catch(() => {
			res.status(400).json({ errors: { global: "User doesn't exist!" } });
		});
});

router.post("/updateBasicInfo", authenticate, (req, res) => {
	const { username } = req.currentUser;
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
		{ username },
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
				profile_pic: user.profile_pic,
				current_status: user.current_status,
				current_location: user.current_location,
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
	const { username } = req.currentUser;
	const { status, current_location } = req.body.data;

	User.findOneAndUpdate(
		{ username },
		{
			current_status: status,
			current_location
		}
	).then(user => {
		res.json({
			basic_info: {
				fullname: user.fullname,
				profile_pic: user.profile_pic,
				current_status: status,
				current_location,
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

// School info
router.get("/fetchSchoolInfo/:username", authenticate, (req, res) => {
	const { username } = req.params;
	User.findOne({ username }).then(user => {
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
	const { username } = req.currentUser;
	const {
		studied_from_year,
		studied_to_year,
		junior_house,
		senior_house
	} = req.body.data;

	User.findOneAndUpdate(
		{ username },
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

router.post("/addNewGame", authenticate, (req, res) => {
	const { username } = req.currentUser;
	User.findOneAndUpdate({ username }, { $push: { games: req.body.data } }).then(
		user => {
			const games = user.games;
			games.push(req.body.data);
			res.json({
				school_info: {
					studied_from_year: user.studied_from_year,
					studied_to_year: user.studied_to_year,
					junior_house: user.junior_house,
					senior_house: user.senior_house,
					games
				}
			});
		}
	);
});

router.post("/deleteGame", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const del_game = req.body.doc;
	User.findOneAndUpdate({ username }, { $pull: { games: del_game } }).then(
		user => {
			let games = user.games;
			/* eslint-disable-next-line */
			games = games.filter(it => it._id !== del_game._id);
			res.json({
				school_info: {
					studied_from_year: user.studied_from_year,
					studied_to_year: user.studied_to_year,
					junior_house: user.junior_house,
					senior_house: user.senior_house,
					games
				}
			});
		}
	);
});

// AfterNavodaya info
router.get("/fetchAfterNavodayaInfo/:username", authenticate, (req, res) => {
	const { username } = req.params;
	User.findOne({ username }).then(user => {
		const { username: current_username } = req.currentUser;
		if (current_username === username) {
			res.json({
				after_navodaya: {
					after_navodaya: user.after_navodaya,
					after_navodaya_vis_type: user.after_navodaya_vis_type,
					after_navodaya_rejected_list: user.after_navodaya_rejected_list
				}
			});
		} else {
			res.json({
				after_navodaya: {
					after_navodaya: user.after_navodaya
				}
			});
		}
	});
});

router.post("/addNewAN", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const doc = req.body.data;
	User.findOneAndUpdate({ username }, { $push: { after_navodaya: doc } }).then(
		user => {
			const docs = user.after_navodaya;
			docs.push(doc);
			res.json({
				after_navodaya: {
					after_navodaya: docs,
					after_navodaya_vis_type: user.after_navodaya_vis_type,
					after_navodaya_rejected_list: user.after_navodaya_rejected_list
				}
			});
		}
	);
});

router.post("/deleteAN", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const doc = req.body.data;
	User.findOneAndUpdate({ username }, { $pull: { after_navodaya: doc } }).then(
		user => {
			let docs = user.after_navodaya;
			/* eslint-disable-next-line */
			docs = docs.filter(it => it._id !== doc._id);
			res.json({
				after_navodaya: {
					after_navodaya: docs,
					after_navodaya_vis_type: user.after_navodaya_vis_type,
					after_navodaya_rejected_list: user.after_navodaya_rejected_list
				}
			});
		}
	);
});

// function getRejList(gender) {
// 	let rej_list = [];
// 	User.find({ gender }, 'fullname')
// 		.then(async users => {
// 			console.log(users);
// 			rej_list = await map(users, user =>
// 				new Promise(resolve => resolve(user)));
// 		});
// 	console.log('In ', rej_list);
// 	return rej_list;
// }

router.post("/updateANVisibilty", authenticate, async (req, res) => {
	const { username } = req.currentUser;
	const vis_type = req.body.visibility.after_navodaya_vis_type;
	const rej_list = req.body.visibility.after_navodaya_rejected_list || [];

	// if(vis_type === "boys") rej_list = await getRejList("Female");
	// else if(vis_type === "girls") rej_list = await getRejList("Male");
	// else if(vis_type === "all") rej_list = [];

	User.findOneAndUpdate(
		{ username },
		{
			after_navodaya_vis_type: vis_type,
			after_navodaya_rejected_list: rej_list
		}
	).then(user => {
		res.json({
			after_navodaya: {
				after_navodaya: user.after_navodaya,
				after_navodaya_vis_type: vis_type,
				after_navodaya_rejected_list: rej_list
			}
		});
	});
});

// Social Accounts info
router.get("/fetchSocialAccInfo/:username", authenticate, (req, res) => {
	const { username } = req.params;
	User.findOne({ username }).then(user => {
		const { username: current_username } = req.currentUser;
		if (current_username === username) {
			res.json({
				social_acc: {
					social_accounts: user.social_accounts,
					social_accounts_vis_type: user.social_accounts_vis_type,
					social_accounts_rejected_list: user.social_accounts_rejected_list
				}
			});
		} else {
			res.json({
				social_acc: {
					social_accounts: user.social_accounts
				}
			});
		}
	});
});

router.post("/updateSocialAccInfo", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const data = req.body.data;
	User.findOneAndUpdate({ username }, { social_accounts: data }).then(user => {
		res.json({
			social_acc: {
				social_accounts: data,
				social_accounts_vis_type: user.social_accounts_vis_type,
				social_accounts_rejected_list: user.social_accounts_rejected_list
			}
		});
	});
});

router.post("/updateSocialVisibilty", authenticate, async (req, res) => {
	const { username } = req.currentUser;
	const vis_type = req.body.visibility.social_accounts_vis_type;
	const rej_list = req.body.visibility.social_accounts_rejected_list || [];

	// console.log(vis_type, rej_list);

	User.findOneAndUpdate(
		{ username },
		{
			social_accounts_vis_type: vis_type,
			social_accounts_rejected_list: rej_list
		}
	).then(user => {
		res.json({
			social_acc: {
				social_accounts: user.social_accounts,
				social_accounts_vis_type: vis_type,
				social_accounts_rejected_list: rej_list
			}
		});
	});
});

// Favourites info
router.get("/fetchFavouritesInfo/:username", authenticate, (req, res) => {
	const { username } = req.params;
	User.findOne({ username }).then(user => {
		const { username: current_username } = req.currentUser;
		if (current_username === username) {
			res.json({
				favourites: {
					favourites: user.favourites,
					favourites_vis_type: user.favourites_vis_type,
					favourites_rejected_list: user.favourites_rejected_list
				}
			});
		} else {
			res.json({
				favourites: {
					favourites: user.favourites
				}
			});
		}
	});
});

router.post("/updateFavouritesInfo", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate({ username }, { favourites: data }).then(user => {
		res.json({
			favourites: {
				favourites: data,
				favourites_vis_type: user.favourites_vis_type,
				favourites_rejected_list: user.favourites_rejected_list
			}
		});
	});
});

router.post("/addNewFieldInFavourites", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate({ username }, { $push: { favourites: data } }).then(
		user => {
			const docs = user.favourites;
			docs.push(data);
			res.json({
				favourites: {
					favourites: docs,
					favourites_vis_type: user.favourites_vis_type,
					favourites_rejected_list: user.favourites_rejected_list
				}
			});
		}
	);
});

router.post("/deleteFavField", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate({ username }, { $pull: { favourites: data } }).then(
		user => {
			let docs = user.favourites;
			/* eslint-disable-next-line */
			docs = docs.filter(it => it._id !== data._id);
			res.json({
				favourites: {
					favourites: docs,
					favourites_vis_type: user.favourites_vis_type,
					favourites_rejected_list: user.favourites_rejected_list
				}
			});
		}
	);
});

router.post("/updateFavVisibilty", authenticate, async (req, res) => {
	const { username } = req.currentUser;
	const vis_type = req.body.visibility.favourites_vis_type;
	const rej_list = req.body.visibility.favourites_rejected_list || [];

	User.findOneAndUpdate(
		{ username },
		{
			favourites_vis_type: vis_type,
			favourites_rejected_list: rej_list
		}
	).then(user => {
		res.json({
			favourites: {
				favourites: user.favourites,
				favourites_vis_type: vis_type,
				favourites_rejected_list: rej_list
			}
		});
	});
});

// Firstthings info
router.get("/fetchFirstThingsInfo/:username", authenticate, (req, res) => {
	const { username } = req.params;
	User.findOne({ username }).then(user => {
		const { username: current_username } = req.currentUser;
		if (current_username === username) {
			res.json({
				firstthings: {
					firstthings: user.first_things,
					first_things_vis_type: user.first_things_vis_type,
					first_things_rejected_list: user.first_things_rejected_list
				}
			});
		} else {
			res.json({
				firstthings: {
					firstthings: user.first_things
				}
			});
		}
	});
});

router.post("/updateFirstThingsInfo", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate({ username }, { first_things: data }).then(user => {
		res.json({
			firstthings: {
				firstthings: data,
				first_things_vis_type: user.first_things_vis_type,
				first_things_rejected_list: user.first_things_rejected_list
			}
		});
	});
});

router.post("/addNewFieldInFirstThings", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate({ username }, { $push: { first_things: data } }).then(
		user => {
			const docs = user.first_things;
			docs.push(data);
			res.json({
				firstthings: {
					firstthings: docs,
					first_things_vis_type: user.first_things_vis_type,
					first_things_rejected_list: user.first_things_rejected_list
				}
			});
		}
	);
});

router.post("/deleteFTField", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate({ username }, { $pull: { first_things: data } }).then(
		user => {
			let docs = user.first_things;
			/* eslint-disable-next-line */
			docs = docs.filter(it => it._id !== data._id);
			res.json({
				firstthings: {
					firstthings: docs,
					first_things_vis_type: user.first_things_vis_type,
					first_things_rejected_list: user.first_things_rejected_list
				}
			});
		}
	);
});

router.post("/updateFTVisibilty", authenticate, async (req, res) => {
	const { username } = req.currentUser;
	const vis_type = req.body.visibility.first_things_vis_type;
	const rej_list = req.body.visibility.first_things_rejected_list || [];

	User.findOneAndUpdate(
		{ username },
		{
			first_things_vis_type: vis_type,
			first_things_rejected_list: rej_list
		}
	).then(user => {
		res.json({
			firstthings: {
				firstthings: user.firstthings,
				first_things_vis_type: vis_type,
				first_things_rejected_list: rej_list
			}
		});
	});
});

router.get("/fetchAllUsers", authenticate, (req, res) => {
	User.find({}, "fullname profile_pic").then(users => {
		res.json({ all_users: users });
	});
});

router.get("/fetchAllUsersFull", authenticate, (req, res) => {
	User.find(
		{},
		"isJoined profile_pic fullname current_status studied_from_year studied_to_year current_location gender birthmonth birthdate blood_group username"
	).then(users => {
		res.json({ all_users: users });
	});
});

router.post("/sendUserResponse", authenticate, (req, res) => {
	const { username, fullname } = req.currentUser;
	const { type, title, message } = req.body;
	/* const obj = {
		message_type,
		title,
		message,
		timestamp: Date.now()
	};
	User.findOneAndUpdate({ username }, { $push: { responses: obj } })
		.then(() => {
			res.json({ success: true });
		})
		.catch(err => {
			res.status(400).json({ success: false, message: err });
		}); */
	const mailOptions = {
		from: "b2009-app@gmail.com",
		to: "sst.trinadh@gmail.com",
		subject: `[B2009] User response - ${type}`,
		html: `<h1>${title}</h1><p><strong>By:</strong> ${fullname} (<strong>username:</strong> ${username})</p><p><strong>Timestamp:</strong> ${Date()}</p><p><strong>Message: </strong>${message}</p>`
	};

	transporter.sendMail(mailOptions, error => {
		if (error) {
			console.log(error); // eslint-disable-line
			res
				.status(400)
				.json({ errors: "Your response failed to send. Please try again!" });
		} else {
			res.json({ success: true });
		}
	});
});

export default router;
