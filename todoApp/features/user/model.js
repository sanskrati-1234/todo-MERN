import mongoose from "../../services/db.js";
const User = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    contact: {
      type: String,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", User);

export default UserModel;
