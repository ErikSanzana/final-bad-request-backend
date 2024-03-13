import express from "express";
// import validateParametersUser from "../../middlewares/validateParamsUser.js";
import {
  createNewUser,
  updateUser,
  getAllUser,
  getUserId,
  getFavoritesByUser,
  addToFavorite,
  deleteUserById,
  setAddress,
  updateAddress,
  removeAddress,
  removeFavorites
} from "../../src/api/v1/controllers/usercontroller.js";
// import { notFound } from "../../src/api/v1/controllers/notFoundController.js";
const router = express.Router();


//router.post("/user", validateParametersUser, createNewUser);
router.post("/user", createNewUser); 

router.put("/user/:id", updateUser); 
router.get("/admin/users", getAllUser); 
router.get("/admin/users/:id", getUserId); 
router.delete("/admin/user/:id", deleteUserById); 
//favs
router.get("/user/favorite/like/:id", getFavoritesByUser);
router.post("/user/favorites", addToFavorite); 
router.delete("/user/favorites/:favorites_id", removeFavorites) //chequear tabla de favoritos 


//address
router.post("/user/address",setAddress)
router.put("/user/address/:postal_code",updateAddress) // deberia ser id..pero id es el codigo postal D:
router.delete("/user/address/:postal_code",removeAddress)

export default router;