const router = require("express").Router();
const writingController = require("../../../controllers/writingController");

// Matches with "/api/contact"
router.route("/")
    .get(writingController.pull)
    .post(writingController.create);

module.exports = router;
