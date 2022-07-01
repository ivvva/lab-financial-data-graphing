const async = require("hbs/lib/async");

const axios = require("axios").default;
const router = require("express").Router();

/* GET home page */
router.get("/", async (req, res, next) => {
  res.render("index");
});

module.exports = router;
