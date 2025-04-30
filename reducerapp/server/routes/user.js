const express = require("express");
const {
  handleGetUserbyId,
  handlepatchUserbyId,
  handlePostUser,
} = require("../controller/users");

const router = express.Router();

router
  .route("/:id")
  .get(handleGetUserbyId)
  .patch(handlepatchUserbyId)
  .delete((req, res) => {});

// POST route
router.post("/", handlePostUser);

module.exports = router;
