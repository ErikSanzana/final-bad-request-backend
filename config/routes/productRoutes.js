import express from "express";
import {
  getAllProducts,
  updateProducts,
  deleteProduct,
  createProducts,
  getProductsById,
  patchProduct,
  buyOrder,
  addCart,
  salesHistory
} from "../../src/api/v1/controllers/productController.js";
import { notFound } from "../../src/api/v1/controllers/notFoundController.js";
const router = express.Router();


///api/v1/store....

//para usuarios
router.get("/products", getAllProducts);
router.get("/product/:id", getProductsById);
//para admin
router.post("/admin/products", createProducts);
router.get("/admin/product/:id", getProductsById);
router.delete("/admin/product/:id", deleteProduct);
router.put("/admin/product/:id", updateProducts);
router.patch("/admin/product/:id", patchProduct);

// rutas para proceso de compra

router.post("/user/shopppingCart", addCart);

router.post("/user/order", buyOrder);

router.post("/users/history", salesHistory);

router.all("*", notFound); //pasar a session routee

export default router;
