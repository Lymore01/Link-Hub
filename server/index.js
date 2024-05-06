require("dotenv").config();
require("./database/config/index");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const PORT = process.env.PORT;
const userRoute = require("./routes/usersRoute");
const linkRoute = require("./routes/linkRoute");
const store = require("./database/SessionStorage/sessions");
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1200000, //20 mins
    },
  })
);

app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRoute);
app.use("/link", linkRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
