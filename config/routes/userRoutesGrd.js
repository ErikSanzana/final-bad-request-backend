import express from "express";
import validateParametersUserGrd from "../../middlewares/validateParamsUserGrd.js";
import {
  createNewUser,
  updateUser,
  getUserId,
  getFavoritesByUser,
  addToFavorite,
  deleteUserById,
} from "../../src/api/v1/controllers/usercontrollerGrd.js";
//import { validateParametersUserGrd } from "../../middlewares/validateParamsUserGrd.js";
// import { notFound } from "../../src/api/v1/controllers/notFoundController.js";

const router = express.Router();

//router.post("/user", validateParametersUserGrd, createNewUser);
router.post("/user", createNewUser);
router.put("/user/:id", updateUser);
router.get("/user/admin/:id", getUserId);
router.get("/user/favorite/like/:id", getFavoritesByUser);
router.post("/user/favorites", addToFavorite);
router.delete("/admin/user/:id", deleteUserById);

export default router;
