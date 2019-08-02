import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";

import auth from "./routes/auth";
import users from "./routes/users";

dotenv.config();
const app = express();
app.use(bodyParser.json());

mongoose.connect(
	process.env.MONGODB_URL, 
	{ 
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true
	}
);

app.use("/api/auth", auth);
app.use("/api/users", users);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
	console.log(`Running on host: ${app.get("port")}`);
});

