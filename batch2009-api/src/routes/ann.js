import express from "express";
import Announcement from "../models/Announcement";
import authenticate from "../middlewares/authenticate";

const router = express.Router();

router.post("/", authenticate, (req, res) => {
  const { title, content } = req.body;
  const obj = {
    title,
    content,
    date: Date.now()
  };
  const ann = new Announcement(obj);
  ann.save(() => {
    res.json({ success: true });
  });
});

router.get("/temp", authenticate, (req, res) => {
  Announcement.find({}, { title: 1, content: 1, date: 1 }).then(anns => {
    res.json({ announcements: anns });
  });
});

/* router.get("/", authenticate, (req, res) => {
  const { limit, max_id, isFirst } = req.query;
  let q1;
  let q2;
  const limitx = limit || 10;
  q1 = max_id ? { _id: max_id } : {};
  Announcement.findOne(q1).then(ann => {
    const max_date = ann.date;
    if (max_date && isFirst === "true") {
      q2 = { date: { $lte: max_date } };
    } else if(max_date) {
      q2 = { date: { $lt: max_date } };
    } else {
      q2 = {};
    }
    Announcement.find(q2, { title: 1, content: 1, date: 1 })
      .sort("-date")
      .limit(parseInt(limitx, 10))
      .then(anns => {
        res.json({ announcements: anns });
      });
  });
}); */

router.get("/", authenticate, (req, res) => {
  const { limit, max_id } = req.query;
  const limitx = limit || 2;
  if (max_id) {
    Announcement.findOne({ _id: max_id }).then(ann => {
      Announcement.find({ date: { $lt: ann.date } })
        .sort("-date")
        .limit(parseInt(limitx, 10))
        .then(anns => {
          Announcement.countDocuments().then(count => {
            res.json({ announcements: anns, metadata: { total: count } });
          });
        });
    });
  } else {
    Announcement.find({})
      .sort("-date")
      .limit(parseInt(limitx, 10))
      .then(anns => {
        Announcement.countDocuments().then(count => {
          res.json({ announcements: anns, metadata: { total: count } });
        });
      });
  }
});

export default router;
