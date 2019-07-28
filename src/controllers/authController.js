import { validationResult } from "express-validator/check";

let getLoginPage = (req, res) => {
    return res.render("auth/login");
};

let getSignUpPage = (req, res) => {
    return res.render("auth/signup");
};

let getPostSignUp = (req, res) => {
    let errorArr = [];

    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach(item => errorArr.push(item.msg));
        console.log(errorArr);
        return
    }
    console.log(req.body)
}

module.exports = {
    getLoginPage: getLoginPage,
    getSignUpPage: getSignUpPage,
    getPostSignUp: getPostSignUp
}


