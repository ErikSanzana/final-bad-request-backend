import {
  createUser,
  updateUsers,
  getUser,
  getFavoritesByUsers,
  addToFavorites,
  deleteUserByIds
} from "../models/useModelGrd.js";

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

    const result = await updateUsers(
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

const getUserId = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await getUser(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFavoritesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const favorites = await getFavoritesByUsers(userId);

    if (!favorites) {
      return res
        .status(404)
        .json({ message: "No se encontraron favoritos para este usuario" });
    }

    res.status(200).json({ favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToFavorite = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const favorite = await addToFavorites(userId, productId);

    res.status(201).json({ favorite });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.deleteUserByIds(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado correctamente', user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createNewUser,
  updateUser,
  getUserId,
  getFavoritesByUser,
  addToFavorite,
  deleteUserById
};
