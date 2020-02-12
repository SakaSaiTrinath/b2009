import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true },
  NoOfRatings: { type: Number, required: true },
  ratedUsers: [{ type: mongoose.Types.ObjectId, ref: "User" }]
});

export default mongoose.model("Announcement", schema);
