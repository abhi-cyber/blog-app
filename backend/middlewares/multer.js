const multer = require("multer");

const storage = multer.diskStorage({}); // gives control over the files added to storage.

// Checking the image extension.
const fileFilter = (req, file, cb) => { 
  if (!file.mimetype.includes("image")) {
    return cb("Invalid image format", false);
  }
  cb(null, true);
};

module.exports = multer({ storage, fileFilter });
