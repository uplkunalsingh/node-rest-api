const express = require("express"),
  router = express.Router();

router.get("/", function (req, res) {
      res.send("Welcome to Node JS V1!!!!!!!!");
});

router.use("/owner", require("./owner.routes").router);
router.use("/pet", require("./pet.routes").router);

module.exports = router;
