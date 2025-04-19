import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema(
  {
    supervisor: {
      type: Schema.ObjectId.Types,
      ref: "User",
    },
    project: {
      type: Schema.ObjectId.Types,
      ref: "Project",
    },
    criteria: {
      documentation: Number,
      implementation: Number,
      presentation: Number,
      viva: Number,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Submission = mongoose.model("Submission", submissionSchema);
