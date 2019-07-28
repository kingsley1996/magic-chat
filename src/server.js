import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/index";
import bodyParser from "body-parser";

let app = express();

// Connect to mongodb
ConnectDB();

//Config view engine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/test-database", async (req, res) => {
//    try {
//        let item = {
//            userId: "15402344",
//            contactId: "17243254305438543"
//        };
//        let contact = await ContactModel.createNew(item);
//        res.send(contact);
//    } catch (err) {
//        console.log(err);
//    }
// });

// Init all routes
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`Hello Linh Dang, I'm running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
})

