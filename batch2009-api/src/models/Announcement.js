import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true, default: 0 },
  NoOfRatings: { type: Number, required: true, default: 0 },
  ratedUsers: [{ type: mongoose.Schema.ObjectId, ref: "User" }]
});

export default mongoose.model("Announcement", schema);
