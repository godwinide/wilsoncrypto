const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        return res.render("index", { pageTitle: "Welcome", res, req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/about", (req, res) => {
    try {
        return res.render("about", { pageTitle: "About Us", res, req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/investment", (req, res) => {
    try {
        return res.render("investment", { pageTitle: "Investment", res, req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/partners", (req, res) => {
    try {
        return res.render("partners", { pageTitle: "Partners", res, req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/contact", (req, res) => {
    try {
        return res.render("support", { pageTitle: "contact", res, req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/terms", (req, res) => {
    try {
        return res.render("terms", { pageTitle: "Terms", res, req });
    }
    catch (err) {
        return res.redirect("/");
    }
});

router.get("/forgot_password", (req, res) => {
    try {
        return res.render("forgot", { pageTitle: "Forgot Password", res, req });
    }
    catch (err) {
        return res.redirect("/");
    }
});



module.exports = router;