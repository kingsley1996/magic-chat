import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/index";

let app = express();

// Connect to mongodb
ConnectDB();

//Config view engine
configViewEngine(app);

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

