import express from "express";
import Announcement from "../models/Announcement";

const router = express.Router();

router.post("/", (req, res) => {
  const { title, content, rating, NoOfRatings, ratedUsers } = req.body;
  const obj = {
    title,
    content,
    rating,
    NoOfRatings,
    ratedUsers,
    date: Date.now()
  };
  const ann = new Announcement(obj);
  ann.save(() => {
    res.json({ success: true });
  });
});

export default router;
