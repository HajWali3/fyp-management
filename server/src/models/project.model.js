import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    toolsUsed: [String],
    status: Enum("pending", "approved", "revision", "completed"),
    student: {
      type: Schema.ObjectId.Types,
      ref: "User",
    },
    supervisor: {
      type: Schema.ObjectId.Types,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Submission = mongoose.model("Submission", submissionSchema);
