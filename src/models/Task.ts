import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    title: String,
    description: {
      type: String,
      unique: true,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Task', TaskSchema);