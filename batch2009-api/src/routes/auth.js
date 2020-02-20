import express from "express";
import bcrypt from "bcrypt";

import User from "../models/User";
import authenticate from "../middlewares/authenticate";

const router = express.Router();

router.post("/", (req, res) => {
	const { credentials } = req.body;
	User.findOne({ username: credentials.username }).then(user => {
		if (user && user.isValidPassword(credentials.password)) {
			if (!user.isNotJoined()) {
				User.findOneAndUpdate(
					{ username: credentials.username },
					{ isJoined: true }
				).then(() => {
					res.json({ user: user.toAuthJSON() });
				});
			} else {
				res.json({ user: user.toAuthJSON() });
			}
		} else {
			res.status(400).json({ errors: { global: "Invalid Credentials" } });
		}
	});
});

router.put("/resetusername", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const newusername = req.body.data.username;
	User.findOneAndUpdate({ username }, { username: newusername })
		.then(user => {
			res.json({
				user: {
					username: newusername,
					token: user.generateJWT(newusername)
				}
			});
		})
		.catch(err => {
			res.status(400).json({ errors: { global: err } });
		});
});

router.put("/resetPassword", authenticate, (req, res) => {
	const { username } = req.currentUser;
	const { current_password, new_password } = req.body.data;
	User.findOne({ username }).then(user => {
		if (user && user.isValidPassword(current_password)) {
			User.findOneAndUpdate(
				{ username },
				{ passwordHash: bcrypt.hashSync(new_password, 10) }
			)
				.then(() => {
					res.json({ message: "password successfully changed!" });
				})
				.catch(err => {
					res.status(400).json({ errors: { global: err } });
				});
		} else {
			res.status(400).json({ errors: { global: "Invalid current password!" } });
		}
	});
});

export default router;
