const express = require("express");
const {
  getAll,
  createTasks,
  getSingleTask,
  updateTasks,
  deleteTasks,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(getAll).post(createTasks);
router.route("/:id").get(getSingleTask).patch(updateTasks).delete(deleteTasks);

module.exports = router;
