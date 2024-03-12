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
router.post("/user", createNewUser); //ok
router.put("/user/:id", updateUser); //ok
router.get("/user/admin", getAllUser);
router.get("/user/admin/:id", getUserId); //ok
router.delete("/admin/user/:id", deleteUserById); //ok

router.get("/user/favorite/like/:id", getFavoritesByUser); //ok individual => se puede integrar a obtener productos (cosa que no se repitan llamadas para 1 solo vista)
router.post("/user/favorites", addToFavorite); //ok
//falta ruta para eliminar favoritos


export default router;
