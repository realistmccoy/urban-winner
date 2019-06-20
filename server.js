const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//Body parser middleware @this is to request req.body.email ex.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//DB CONFIG
const db = require("./config/keys").mongoURI;

//Connect to MongoDB via mongoose
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("mongoDB Connected!"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport CONFIG
require("./config/passport")(passport);

//Use routes

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
