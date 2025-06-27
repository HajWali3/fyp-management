import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      unique: [true, "Please provide a unique title"],
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
    },

    toolsUsed: {
      type: String,
      required: [true, "Please provide description"],
    },

    domain: {
      type: String,
      required: [true, "Please provide description"],
    },

    status: Enum("pending", "approved", "revision", "completed"),

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    finalGrade: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
