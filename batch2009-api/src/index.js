import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";

import auth from "./routes/auth";
import ann from "./routes/ann";
import users from "./routes/users";
import locations from "./routes/locations";

dotenv.config();
const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use("/api/auth", auth);
app.use("/api/ann", ann);
app.use("/api/users", users);
app.use("/api/locations", locations);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(path.join(__dirname, "../public/uploads")));
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  /* eslint-disable-next-line */
  console.log(`Running on host: ${app.get("port")}`);
});
