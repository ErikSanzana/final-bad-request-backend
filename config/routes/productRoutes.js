import express from "express";
import {
  getAllProducts,
  updateProducts,
  deleteProduct,
  createProducts,
  getProductsById,
  patchProduct,
  buyOrder,
} from "../../src/api/v1/controllers/productController.js";
import { notFound } from "../../src/api/v1/controllers/notFoundController.js";
const router = express.Router();

// "/products" "/products/:id" 

router.get("/products", getAllProducts);

router.get("/products/:id", getProductsById);

// "/admin/products"

router.post("/admin/products", createProducts);

// "/admin/products/:id"

router.delete("/admin/products/:id", deleteProduct);

router.put("/admin/products/:id", updateProducts );

router.patch("/admin/product/:id", patchProduct );

// rutas para proceso de compra


router.post("/algunNombreDeRutaBackEndParaSoloRellenarTablas/shopppingCart", addCart); // el carro es diferente a favoritos.... pero usan los mismos datos... 
router.post("/algunNombreDeRutaBackEndParaSoloRellenarTablas/order", buyOrder);
router.post("/algunNombreDeRutaBackEndParaSoloRellenarTablas/history", salesHistory);







router.all("*", notFound); // para rutas inexistentes



export default router;
