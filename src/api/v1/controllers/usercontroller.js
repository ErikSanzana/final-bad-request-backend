import {
  createUser,
  updateUsers,
  getUser,
  getFavoritesByUsers,
  addToFavorites,
  deleteUserByIds,
  getUserAll
} from "../models/userModel.js";

//Table: user

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
      rol
    } = req.body;
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
    res.status(201).json({ user: result });
  } catch (error) {
    console.log(error)
    res.status(400).json(error.message);
  }
};


const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rut,
      name,
      last_name,
      postal_code,
      email,
      password,
      birth_date,
      rol
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

const getAllUser = async (req, res) => {
  try {
    const user = await getUserAll();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const deletedUser = await deleteUserByIds(id);
    res
      .status(200)
      .json({ message: "Usuario eliminado correctamente", user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Address table
const setAddress = async (req,res) => {
  try {
    const params = req.params 
    const result = await createA
  } catch (error) {
    
  }
}




const getFavoritesByUser = async (req, res) => {
  try {
    const client_rut = req.params.id;
    const favorites = await getFavoritesByUsers(client_rut);
    res.status(200).json({ favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToFavorite = async (req, res) => {
  try {
    const { client_rut, product_id } = req.body;
    const favorite = await addToFavorites(client_rut, product_id);
    res.status(201).json({ favorite });
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
  deleteUserById,
  getAllUser
};
