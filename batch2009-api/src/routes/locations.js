import express from "express";
import Location from "../models/Location";

const router = express.Router();

router.post("/countries", (req, res) => {
	Location.distinct("Country").then(countries => {
		res.json({ countries });
	});
});

router.post("/states/:c", (req, res) => {
	Location.distinct("State", {"Country": req.params.c }).then(states => {
		res.json({ states });
	});
});

router.post("/cities/:c/:s", (req, res) => {
	Location.distinct("City", {"Country": req.params.c, "State": req.params.s }).then(cities => {
		res.json({ cities });
	});
});

export default router;