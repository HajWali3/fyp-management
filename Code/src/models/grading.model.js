import mongoose, { Schema } from "mongoose";

const gradingSchema = new Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: [true, "Please provide a project"],
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a student"],
    },
    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a supervisor"],
    },
    grade: {
      type: Number,
      required: [true, "Please provide a grade"],
    },
    feedback: {
      type: String,
      required: [true, "Please provide feedback"],
    },
  },
  {
    timestamps: true,
  }
);

const Grading =
  mongoose.models.Grading || mongoose.model("Grading", gradingSchema);

export default Grading;
