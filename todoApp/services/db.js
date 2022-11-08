import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/todo-App", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose;
