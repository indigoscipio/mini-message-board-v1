var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

//Form Page
router.get("/new", function (req, res, next) {
  res.render("form");
});
router.post("/new", function (req, res, next) {
  let { postTitle, postBody } = req.body;

  messages.push({ text: postTitle, user: postBody, added: new Date() });
  console.log(`Title: ${postTitle}, Body: ${postBody}`);
  res.redirect("/");
});

module.exports = router;
