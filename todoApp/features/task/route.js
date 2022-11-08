import express from "express";
const route = express.Router();
import Task from "./model.js";
import { updateTask } from "./controller.js";
route.get("/", async function (req, res) {
  console.log("task get");
  const task = await Task.find();
  res.send(task);
});
route.post("/", async (req, res) => {
  const task = await new Task(req.body);
  task.save();
  res.send(task);
});

route.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete(id);
  res.send(task);
});
route.patch("/:id", updateTask);

export default route;
