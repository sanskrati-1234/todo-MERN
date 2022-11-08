import express from "express";
const route = express.Router();
import User from "./model.js";
console.log("User");

route.get("", (req, res) => {
  console.log("get")(async function () {
    const data = await User.find();
    console.log(data);
    return res.send(data);
  })();
});
route.post("", function (req, res) {
  (async function () {
    const user = await new User(req.body);

    user.save();
    res.send("User");
  })();
});

export default route;
