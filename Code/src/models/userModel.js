import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Please provide a full name"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "Please provide a unique username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: [true, "Please provide a unique email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },

  role: {
    type: String,
    enum: ["student", "supervisor", "admin"],
    default: "student",
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  supervisor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  proposals: {
    type: Schema.Types.ObjectId,
    ref: "Proposal",
  },
  projects: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
