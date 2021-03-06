import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/index";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";

let app = express();

// Connect to mongodb
ConnectDB();

// Config session
configSession(app);

//Config view engine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

// Enable flash messages
app.use(connectFlash());

// Init all routes
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`Hello Linh Dang, I'm running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
})

