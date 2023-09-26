const express = require("express");
const router = express.Router();

const getAll = (req, res) => {
  res.send("Here are your items ");
};

const getSingleTask = (req, res) => {
  res.send("Here is your task ");
};

const createTasks = (req, res) => {
  res.json(req.body);
};

const updateTasks = (req, res) => {
  res.send("update a task");
};
const deleteTasks = (req, res) => {
  res.send("delete a task");
};
module.exports = {
  getAll,
  getSingleTask,
  createTasks,
  updateTasks,
  deleteTasks,
};
