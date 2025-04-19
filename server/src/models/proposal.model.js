import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema(
  {
    student: {
      type: Schema.ObjectId.Types,
      ref: "User",
    },
    supervisor: {
      type: Schema.ObjectId.Types,
      ref: "User",
    },
    status: Enum("pending", "approved", "rejected"),
    feedback: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Submission = mongoose.model("Submission", submissionSchema);
