import express from "express";
import User from "../models/User";

const router = express.Router();

router.post("/", (req, res) => {
	const { credentials } = req.body;
	User.findOne({ username: credentials.username }).then(user => {
		 if(user && user.isValidPassword(credentials.password)) {
			res.json({ user: user.toAuthJSON() });
		} else {
			res.status(400).json({ errors: { global: "Invalid Credentials" } });
		} 
	});
});

router.get("/", (req, res) => {
	User.find({}).then(res => {
		console.log(res);
	});
});

export default router;