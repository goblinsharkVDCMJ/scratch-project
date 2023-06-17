const express = require("express");
const router = express.Router();
const dbController = require("./dbController");

// route to fill with current available events
router.get("/getActivities", dbController.getActivities, (req, res) => {
  return res.status(200).json([...res.locals.activities]);
});

router.get("/getUserActivities", dbController.getUserActivities, (req, res) => {
  return res.status(200).json(userActivities);
});

router.post("/postActivity", dbController.postActivity, (req, res) => {
  return res.sendStatus(200);
});

router.patch(
  "/addUserToActivity",
  dbController.addUserToActivity,
  (req, res) => {
    return res.sendStatus(200);
  }
);

router.post("/createUser", dbController.createUser, (req, res) => {
  return res.sendStatus(200);
});

router.get("/authenticateUser", dbController.authenticateUser, (req, res) => {
  return res.sendStatus(200);
});

// global error handler

module.exports = router;
