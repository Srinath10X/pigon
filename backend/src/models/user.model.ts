import { Schema, Document, Model, model } from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  profilePic?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<User> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export const User: Model<User> = model<User>("User", userSchema);
