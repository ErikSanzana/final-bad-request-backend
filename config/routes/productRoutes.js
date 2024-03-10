import express from "express";

import {
  getAllProducts,
  updateProducts,
  deleteProduct,
  createProducts,
  getProductsById
} from "../../src/api/v1/controllers/productController.js";
const router = express.Router();

router.get("/products", getAllProducts);

router.get("/products/:id", getProductsById);

router.post("/admin/products", createProducts);

router.post("/admin/products/:id", updateProducts);

router.delete("/admin/products/:id", deleteProduct);

export default router;
