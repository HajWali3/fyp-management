import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId.Types,
      ref: "User",
    },
    project: {
      type: Schema.ObjectId.Types,
      ref: "Project",
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Submission = mongoose.model("Submission", submissionSchema);
