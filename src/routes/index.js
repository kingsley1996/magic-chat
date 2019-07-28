import express from 'express';
import { home, auth } from "./../controllers/index";
let router = express.Router();

let initRoutes = (app) => {
    router.get("/", home.getHomePage);

    router.get("/login", auth.getLoginPage);

    router.get("/sign-up", auth.getSignUpPage);

    return app.use("/", router);
}

module.exports = initRoutes;
