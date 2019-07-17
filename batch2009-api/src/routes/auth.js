import express from "express";
import User from "../models/User";

const router = express.Router();

router.post("/", (req, res) => {
	const { credentials } = req.body;
	console.log(credentials);
	User.findOne({ username: credentials.username }).then(user => {
		/* if(user && user.isValidPassword(credentials.password)) {
			res.json({ user: user.toAuthJSON() });
		} else {
			res.status(400).json({ errors: { global: "Invalid Credentials" } });
		} */
		if(!user) {
			res.status(400).json({ errors: { global: "No user present" } });
		} else if (!user.isValidPassword(credentials.password)) {
			res.status(400).json({ errors: { global: "Wrong password" } });
		} else {
			res.json({ user: user.toAuthJSON() });
		}
	});
});

router.get("/", (req, res) => {
	User.find({}).then(res => {
		console.log(res);
	});
});

export default router;