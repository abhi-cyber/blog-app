const multer = require("../middlewares/multer");
const { createPost } = require("../controllers/post");
const router = require("express").Router();

router.post("/create", multer.single("thumbnail"), createPost);

module.exports = router;
