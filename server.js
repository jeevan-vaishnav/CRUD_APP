//User Management System
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");
const app = express();

dotenv.config({ path: "config.env" });
//set port
const PORT = process.env.PORT || 8080;

//log request ( morgan is middleware in nodejs)
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse request to body-parser module
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs"); // i am using ejs template
// app.set("view engine", "pug");
// app.set("views", path.resolve(__dirname, "views"));

//load the assests files
// app.set("/css", path.resolve(__dirname, "assets/css"));
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//css/styles.css
// app.set("/img", path.resolve(__dirname, "assets/img"));
// app.set("/js", path.resolve(__dirname, "assets/js"));

//load router
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
