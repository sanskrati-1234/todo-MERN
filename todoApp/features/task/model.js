import mongoose from "../../services/db.js";
const Task = mongoose.Schema(
  {
    userId: mongoose.ObjectId,
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    priority: {
      type: String,
    },
    status: {
      type: String,
    },
    category: {
      type: String,
    },
    attactment: {
      type: Array,
    },
  },
  {
    timestamp: true,
  }
);

const taskModel = mongoose.model("tasks", Task);
export default taskModel;
