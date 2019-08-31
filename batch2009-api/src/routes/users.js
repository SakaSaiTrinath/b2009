import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

import User from "../models/User";
import authenticate from "../middlewares/authenticate";

const router = express.Router();

// Setting storage engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
  	const filePath = './public/uploads/' + file.originalname;
  	const mime = ['.jpeg', '.png', '.jpg'];
	for(var i = 0; i < mime.length; ++i) {
		let fileWithType = '.' + filePath.split('.')[1] + mime[i];
		if(fs.existsSync(fileWithType)){
			fs.unlinkSync(fileWithType);
			break;
		}
	}
	cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || 
    	file.mimetype === 'image/png' || 
    	file.mimetype === 'image/jpg' ) {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1024 * 1024 * 5},
  fileFilter: fileFilter
});

// Profile Pic upload
router.post("/uploadProfilePic", authenticate, upload.single('profile_pic'), (req, res) => {
	const { sessionId } = req.currentUser;
	/*upload(req, res, (err) => {
	    if(err){
	      res.status(400).json({ errors: { global: err } });
	    } else {
	      if(req.file == undefined){
	        res.status(400).json({ errors: { global: "No File Selected!" } });
	      } else {
	      }
	    }
	});*/
  	let imagePath = req.file.path.split('\\')[2];
  	User.findOneAndUpdate(
  		{ sessionId },
  		{ profile_pic: imagePath }
  	).then(user => {
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
  	});
});


// Basic info
router.get("/fetchBasicInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({ 
			basic_info: {
				fullname: user.fullname,
				profile_pic: user.profile_pic,
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
	const { sessionId } = req.currentUser;
	const { status, current_location } = req.body.data;
	
	User.findOneAndUpdate(
		{ sessionId },
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
				current_location: current_location,
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

router.post("/addNewGame", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOneAndUpdate(
		{ sessionId },
		{ $push: { games: req.body.data } }
	).then(user => {
		const games = user.games;
		games.push(req.body.data);
		res.json({ 
			school_info: {
				studied_from_year: user.studied_from_year,
				studied_to_year: user.studied_to_year,
				junior_house: user.junior_house,
				senior_house: user.senior_house,
				games: games
			} 
		});
	});
});

router.post("/deleteGame", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const del_game = req.body.doc;
	User.findOneAndUpdate(
		{ sessionId },
		{ $pull: { games: del_game } }
	).then(user => {
		let games = user.games;
		games = games.filter(it => it._id != del_game._id);
		res.json({ 
			school_info: {
				studied_from_year: user.studied_from_year,
				studied_to_year: user.studied_to_year,
				junior_house: user.junior_house,
				senior_house: user.senior_house,
				games: games
			} 
		});
	});
});

// AfterNavodaya info
router.get("/fetchAfterNavodayaInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({
			after_navodaya: {
				after_navodaya: user.after_navodaya,
				after_navodaya_vis_type: user.after_navodaya_vis_type,
				after_navodaya_rejected_list: user.after_navodaya_rejected_list
			}
		});
	});
});

router.post("/addNewAN", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const doc = req.body.data;
	User.findOneAndUpdate(
		{ sessionId },
		{ "$push": { after_navodaya: doc } }
	).then(user => {
		const docs = user.after_navodaya;
		docs.push(doc);
		res.json({
			after_navodaya: {
				after_navodaya: docs,
				after_navodaya_vis_type: user.after_navodaya_vis_type,
				after_navodaya_rejected_list: user.after_navodaya_rejected_list
			}
		});
	});
});

router.post("/deleteAN", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const doc = req.body.data;
	User.findOneAndUpdate(
		{ sessionId },
		{ "$pull": { after_navodaya: doc } }
	).then(user => {
		let docs = user.after_navodaya;
		docs = docs.filter(it => it._id != doc._id);
		res.json({
			after_navodaya: {
				after_navodaya: docs,
				after_navodaya_vis_type: user.after_navodaya_vis_type,
				after_navodaya_rejected_list: user.after_navodaya_rejected_list
			}
		});
	});
});

function updateANVisibiltyFun(gender, res, sessionId, visibility) {
	let rej_list = [];
	User.find({ gender }, 'fullname')
		.then(users => {
			users.map(usr => {
				rej_list.push(usr.fullname);
			});

			User.findOneAndUpdate(
				{ sessionId },
				{ 
					after_navodaya_vis_type: visibility.after_navodaya_vis_type,
					after_navodaya_rejected_list: rej_list
				}
			).then(user => {
				res.json({
					after_navodaya: {
						after_navodaya: user.after_navodaya,
						after_navodaya_vis_type: visibility.after_navodaya_vis_type,
						after_navodaya_rejected_list: visibility.after_navodaya_rejected_list
					}
				});
			});
		});
}

router.post("/updateANVisibilty", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const { visibility } = req.body;
	let vis_type = req.body.visibility.after_navodaya_vis_type;
	let rej_list = req.body.visibility.rej_list || [];

	if(vis_type === "boys") {
		updateANVisibiltyFun("Female", res, sessionId, visibility);
	} else if(vis_type === "girls") {
		updateANVisibiltyFun("Female", res, sessionId, visibility);
	} else {
		if(vis_type === "all") rej_list = [];
		User.findOneAndUpdate(
			{ sessionId },
			{ 
				after_navodaya_vis_type: visibility.after_navodaya_vis_type,
				after_navodaya_rejected_list: rej_list
			}
		).then(user => {
			res.json({
				after_navodaya: {
					after_navodaya: user.after_navodaya,
					after_navodaya_vis_type: visibility.after_navodaya_vis_type,
					after_navodaya_rejected_list: visibility.after_navodaya_rejected_list
				}
			});
		});
	}
});

// Social Accounts info
router.get("/fetchSocialAccInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({
			social_acc: {
				social_accounts: user.social_accounts,
				social_accounts_vis_type: user.social_accounts_vis_type,
				social_accounts_rejected_list: user.social_accounts_rejected_list
			}
		});
	});
});

router.post("/updateSocialAccInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const data = req.body.data;
	User.findOneAndUpdate(
		{ sessionId },
		{ social_accounts: data }
	).then(user => {
		res.json({
			social_acc: {
				social_accounts: data,
				social_accounts_vis_type: user.social_accounts_vis_type,
				social_accounts_rejected_list: user.social_accounts_rejected_list
			}
		});
	});
});

// Favourites info
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

router.post("/updateFavouritesInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate(
		{ sessionId },
		{ favourites: data }
	).then(user => {
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
	const { sessionId } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate(
		{ sessionId },
		{ "$push": { favourites: data } }
	).then(user => {
		const docs = user.favourites;
		docs.push(data);
		res.json({
			favourites: {
				favourites: docs,
				favourites_vis_type: user.favourites_vis_type,
				favourites_rejected_list: user.favourites_rejected_list
			}
		});
	});
});

router.post("/deleteFavField", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate(
		{ sessionId },
		{ "$pull": { favourites: data } }
	).then(user => {
		let docs = user.favourites;
		docs = docs.filter(it => it._id != data._id);
		res.json({
			favourites: {
				favourites: docs,
				favourites_vis_type: user.favourites_vis_type,
				favourites_rejected_list: user.favourites_rejected_list
			}
		});
	});
});

// Firstthings info
router.get("/fetchFirstThingsInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	User.findOne({ sessionId }).then(user => {
		res.json({
			firstthings: {
				firstthings: user.first_things,
				first_things_vis_type: user.first_things_vis_type,
				first_things_rejected_list: user.first_things_rejected_list
			}
		});
	});
});

router.post("/updateFirstThingsInfo", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate(
		{ sessionId },
		{ first_things: data }
	).then(user => {
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
	const { sessionId } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate(
		{ sessionId },
		{ "$push": { first_things: data } }
	).then(user => {
		const docs = user.first_things;
		docs.push(data);
		res.json({
			firstthings: {
				firstthings: docs,
				first_things_vis_type: user.first_things_vis_type,
				first_things_rejected_list: user.first_things_rejected_list
			}
		});
	});
});

router.post("/deleteFTField", authenticate, (req, res) => {
	const { sessionId } = req.currentUser;
	const { data } = req.body;
	User.findOneAndUpdate(
		{ sessionId },
		{ "$pull": { first_things: data } }
	).then(user => {
		let docs = user.first_things;
		docs = docs.filter(it => it._id != data._id);
		res.json({
			firstthings: {
				firstthings: docs,
				first_things_vis_type: user.first_things_vis_type,
				first_things_rejected_list: user.first_things_rejected_list
			}
		});
	});
});

router.get("/fetchAllUsers", authenticate, (req, res) => {
	User.find({}, 'fullname profile_pic').then(users => {
		res.json({ all_users: users });
	});
}); 

export default router;