// External import
const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

//Internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const inboxRouter = require("./router/inboxRouter");
const usersRouter = require("./router/usersRouter");

const app = express();
dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.log(err));

//Request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//parse cookie
app.use(cookieParser(process.env.SECRET_COOKIE));

// routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Sever run on port: ${process.env.PORT}`);
});
