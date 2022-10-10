import connectDB from "./dbConnect";
import User from "../models/User";
import { hash, compare } from "bcryptjs";

export const validateEmail = (email) => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regEx.test(email);
};

export const validateRegisterForm = async (
  firstName,
  lastName,
  email,
  password
) => {
  if (!firstName || firstName.length < 2) {
    return { error: "First Name must have 2 characters" };
  }

  if (!lastName || lastName.length < 2) {
    return { error: "Last Name must have 2 characters" };
  }

  if (!validateEmail(email)) {
    return { error: "Email is invalid" };
  }

  await connectDB();
  const userEmail = await User.findOne({ email });

  if (userEmail) {
    return { error: "Email already exists" };
  }

  if (!password || password.length < 5) {
    return { error: "Password must have 5 characters" };
  }
  return null;
};

export const hashPassword = async (password) => {
  return await hash(password, 12);
};

export const verifyPassword = async (password, hashedPassword) => {
  return await compare(password, hashedPassword);
};
