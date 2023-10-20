const express = require("express");
const ThoughtsController = require("../controllers/ThoughtsController");
const UsersController = require("../controllers/UsersController");
const router = express.Router();

router.post("/users", UsersController.createUser);
router.get("/thoughts", ThoughtsController.findAllThoughts);