let getHomePage = (req, res) => {
    return res.render("main/content/index");
};

module.exports = {
    getHomePage: getHomePage
}
