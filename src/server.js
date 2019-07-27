import express from "express";
import ConnectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";

let app = express();

// Connect to mongodb
ConnectDB();

app.get("/test-database", async (req, res) => {
   try {
       let item = {
           userId: "15402344",
           contactId: "17243254305438543"
       };
       let contact = await ContactModel.createNew(item);
       res.send(contact);
   } catch (err) {
       console.log(err);
   }
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`Hello Linh Dang, I'm running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
})

