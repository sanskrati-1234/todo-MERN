import Task from "./model.js";

export const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndUpdate(id, { status: "active" });
    task.save();
    res.send(task);
  } catch (Err) {
    console.log(Err);
    res.send({ message: "We are facing issue, Please try later" });
  }
};
