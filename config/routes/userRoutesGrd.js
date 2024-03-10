import express from "express";
import validateParametersUserGrd from "../../middlewares/validateParamsUserGrd.js";
import {
  createNewUser,
  updateUser,
  getUserId,
} from "../../src/api/v1/controllers/usercontrollerGrd.js";
//import { validateParametersUserGrd } from "../../middlewares/validateParamsUserGrd.js";
// import { notFound } from "../../src/api/v1/controllers/notFoundController.js";

const router = express.Router();

//router.post("/user", validateParametersUserGrd, createNewUser);
router.post("/user", createNewUser);
router.put("/user/:id", updateUser);
router.get("/user/admin/:id", getUserId);

export default router;
