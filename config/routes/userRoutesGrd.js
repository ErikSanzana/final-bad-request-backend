import express from "express";
import {
  
    createNewUser
 

} from "../../src/api/v1/controllers/usercontrollerGrd.js";
//import { validateParametersUserGrd } from "../../middlewares/validateParamsUserGrd.js";
import { notFound } from "../../src/api/v1/controllers/notFoundController.js";

const router = express.Router();

//router.post("/user", validateParametersUserGrd, createNewUser);
router.post("/user", createNewUser);


export default router;
