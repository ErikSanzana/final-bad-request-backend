import express from "express";
// import validateParametersUser from "../../middlewares/validateParamsUser.js";
import {
  createNewUser,
  updateUser,
  getAllUser,
  getUserId,
  getFavoritesByUser,
  addToFavorite,
  deleteUserById
} from "../../src/api/v1/controllers/usercontroller.js";
// import { notFound } from "../../src/api/v1/controllers/notFoundController.js";
const router = express.Router();


//router.post("/user", validateParametersUser, createNewUser);
router.post("/user", createNewUser); 
router.post("/user/address", )
router.put("/user/:id", updateUser); 
router.get("/admin/users", getAllUser); 
router.get("/admin/users/:id", getUserId); 
router.delete("/admin/user/:id", deleteUserById); 

router.get("/user/favorite/like/:id", getFavoritesByUser);
router.post("/user/favorites", addToFavorite); 
//falta ruta para eliminar favoritos


export default router;
