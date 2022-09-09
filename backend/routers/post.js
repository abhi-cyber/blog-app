const multer = require("../middlewares/multer");
const { createPost } = require("../controllers/post");
const { postValidator, validate } = require("../middlewares/postValidator");
const router = require("express").Router();

router.post(
  "/create",
  multer.single("thumbnail"),
  (req, res, next) => {
    const { tags } = req.body;
    if (tags) req.body.tags = JSON.parse(tags);

    next();
  },
  postValidator,
  validate,
  createPost
);

module.exports = router;
