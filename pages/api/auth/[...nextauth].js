import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../models/User";
import connectDB from "../../../lib/dbConnect";

import clientPromise from "../../../lib/mongodb";
import { verifyPassword } from "../../../lib/utils";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials;
        await connectDB();
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("No user found");
        }

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw new Error("Could not log you in");
        }

        return {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: MongoDBAdapter(clientPromise),
};
export default NextAuth(authOptions);
