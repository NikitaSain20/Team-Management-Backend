import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["TODO", "DOING", "DONE"],
      default: "TODO",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requirde: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requirde: true,
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.index({ team: 1, status: 1 });
taskSchema.index({ team: 1, assignedTo: 1 });
export default mongoose.model("Task", taskSchema);
