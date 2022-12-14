const { check, validationResult } = require("express-validator");

// Validator to check the data added and the error response
exports.postValidator = [
  check("title").trim().not().isEmpty().withMessage("Post title is missing!"),
  check("content")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Post content is missing!"),
  check("meta").trim().not().isEmpty().withMessage("Post meta is missing!"),
  check("slug").trim().not().isEmpty().withMessage("Post slug is missing!"),
  check("tags")
    .isArray()
    .withMessage("Tags must be an array of strings!")
    .custom((tags) => {
      for (let t of tags) {
        if (typeof t != "string") {
          throw Error("Tags must be an array of strings ");
        }
      }
      return true;
    }),
];

// Exports the error message

exports.validate = (req, res, next) => {
  // Middleware for validating error
  const error = validationResult(req).array();
  if (error.length) {
    return res.status(401).json({ error: error[0].msg });
  }
  // Note:- Displays the error one by one
  next();
};
