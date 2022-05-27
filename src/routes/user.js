const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.route("/").post(userController.create);
router.route("/").get(userController.list);

module.exports = router;
