let getLoginPage = (req, res) => {
    return res.render("auth/login");
};

let getSignUpPage = (req, res) => {
    return res.render("auth/signup");
};

module.exports = {
    getLoginPage: getLoginPage,
    getSignUpPage: getSignUpPage
}

