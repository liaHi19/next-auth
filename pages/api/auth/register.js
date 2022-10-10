import { validateRegisterForm, hashPassword } from "../../../lib/utils";
import User from "../../../models/User";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, password } = req.body;
    const errorMsg = await validateRegisterForm(
      firstName,
      lastName,
      email,
      password
    );

    if (errorMsg) {
      return res.status(400).json(errorMsg);
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
};

export default handler;
