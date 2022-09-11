const multer = require("../middlewares/multer");
const { createPost } = require("../controllers/post");
const { postValidator, validate } = require("../middlewares/postValidator");
const router = require("express").Router();
const { parseData } = require("../middlewares");

router.post(
  "/create",
  multer.single("thumbnail"),
  parseData,
  postValidator,
  validate,
  createPost
);

module.exports = router;
