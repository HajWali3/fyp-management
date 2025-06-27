import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema(
  {
    student: {
      type: Schema.ObjectId.Types,
      ref: "Project",
    },
    type: Enum("report", "ppt", "code", "final"),
    fileUrl: String,
  },
  {
    timestamps: true,
  }
);

export const Submission =   mongoose.models.Submission || mongoose.model("Submission", submissionSchema);
