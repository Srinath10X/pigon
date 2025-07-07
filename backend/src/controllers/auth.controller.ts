import bcrypt from "bcryptjs";

import { User } from "../models/user.model";
import { Request, Response } from "express";

interface UserInput {
  name: string;
  email: string;
  password: string;
}

export async function signUp(request: Request, response: Response) {
  const { name, email, password } = request.body as UserInput;

  if (!name || !email || !password) {
    return response.status(400).json({ error: "All feilds are required" });
  }

  if (password.length < 6) {
    return response.status(400).json({ error: "Password should be at least 6 characters long" });
  }

  const user = await User.findOne({ email });
  if (user) return response.status(400).json({ error: "Email already in use" });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = new User({ name, email, password: hash });
  if (!newUser) return response.status(400).json({ error: "Invalid user data" });

  try {
    await newUser.save();
    return response.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return response.status(500).json({ error: "Internal server error" });
  }
}
