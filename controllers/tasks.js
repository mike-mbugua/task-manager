const express = require("express");
const router = express.Router();
const Task = require("../models/task.js");

const getAll = (req, res) => {
  res.send("Here are your items ");
};

const getSingleTask = (req, res) => {
  res.send("Here is your task ");
};

const createTasks = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
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
