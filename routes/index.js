const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
//message more clear
router.use((req, res) => {
  res.send("<h1>Wrong Route, you need to update your Route!</h1>");
});

module.exports = router;
