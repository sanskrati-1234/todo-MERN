import express from "express";
import UserRoute from "./features/user/route.js";
import TaskRoute from "./features/task/route.js";
const app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use("/user", UserRoute);
app.use("/task", TaskRoute);

app.listen(3000, () => {
  console.log("listening port" + 3000);
});
