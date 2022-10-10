import { apiAuth } from "./apiAuth";

export const registerUser = async (info) => {
  try {
    await apiAuth.post("/register", info);
  } catch (error) {
    console.log(error.response.data.error);
  }
};
