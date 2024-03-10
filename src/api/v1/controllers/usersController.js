import { createUser } from "../models/userModel.js";

const createNewUser = async (req, res) => {
  try {
    const { email, password, rut, name, last_name, last_name_second, birth_date } = req.body;
    console.log("user?", req.body)
    const newUser = await createUser(email, password, rut, name, last_name, last_name_second, birth_date);
    console.log("newUser?", newUser)
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.log(error)
    res.status(400).json(error.message);
  }
};

export { createNewUser };
