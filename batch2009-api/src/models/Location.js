import mongoose from "mongoose";

const schema = new mongoose.Schema({
	city: {
		type: String,
		index: true
	},
	state: {
		type: String,
		index: true
	},
	country: {
		type: String,
		index: true
	}
});

export default mongoose.model("Location", schema);