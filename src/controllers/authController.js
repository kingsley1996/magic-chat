import { validationResult } from "express-validator/check";
import {auth} from "./../services/index";

let getLoginPage = (req, res) => {
    return res.render("auth/login");
};

let getSignUpPage = (req, res) => {
    return res.render("auth/signup", {
        errors: req.flash("errors")
    });
};

let getPostSignUp = async (req, res) => {
    let errorArr = [];
    let successArr = [];

    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach(item => errorArr.push(item.msg));
        req.flash("errors", errorArr);
        return res.redirect("/sign-up")
    }

    try {
        let createUserSuccess =  await auth.register(req.body.email, req.body.gender, req.body.password);
        successArr.push(createUserSuccess);

        req.flash("success", successArr);
        return res.redirect("/login");
    } catch(error) {
        errorArr.push(error)
        req.flash("errors", errorArr);
        return res.redirect("/sign-up");
    } 
}

module.exports = {
    getLoginPage: getLoginPage,
    getSignUpPage: getSignUpPage,
    getPostSignUp: getPostSignUp
}


