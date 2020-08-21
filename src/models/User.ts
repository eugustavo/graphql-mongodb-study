import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', UserSchema);