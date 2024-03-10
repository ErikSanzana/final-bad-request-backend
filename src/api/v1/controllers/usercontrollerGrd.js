import { createUser } from "../models/useModelGrd.js";

const createNewUser = async (req, res) => {
  try {
    const {
      rut,
      name,
      last_name,
      postal_code,
      email,
      password,
      birth_date,
      rol,
    } = req.body;

    //  console.log("body  : ",req.body)

    const result = await createUser(
      rut,
      name,
      last_name,
      postal_code,
      email,
      password,
      birth_date,
      rol
    );

    //  console.log("reultado : ",result)

    res.status(201).json({ user: result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      id,
      rut,
      name,
      last_name,
      postal_code,
      email,
      password,
      birth_date,
      rol,
    } = req.body;

    const result = await updateUser(
      id,
      rut,
      name,
      last_name,
      postal_code,
      email,
      password,
      birth_date,
      rol
    );

    res.status(200).json({ user: result });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export { createNewUser,updateUser};
