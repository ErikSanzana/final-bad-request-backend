import {
  createProduct,
  getProduct,
  ProductsById,
  updateProduct,
  destroyProduct,
  patchUpdateProduct,
  createStoreCart,
  destroyCart
} from "../models/productModel.js";
import { findError } from "../utils/utils.js";

//products
const createProducts = async (req, res) => {
  try {
    const { name, description, price, stock, product_image } = req.body;
    const newProduct = await createProduct({
      name,
      description,
      price,
      stock,
      product_image
    });
    res.status(201).json({ product: newProduct });
    console.log(newProduct);
  } catch (error) {
    console.log(error);
    // const errorFound = findError(error.code);
    // return res
    //   .status(errorFound[0].status)
    //   .json({ error: errorFound[0].message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await getProduct();
    res.status(200).json({ products: products });
  } catch (error) {
    console.log(error);
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductsById(id);
    res.status(200).json({ product: product });
  } catch (error) {
    console.log("error", error);
  }
};

const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, product_image } = req.body;
    const products_update = await updateProduct(
      id,
      name,
      description,
      price,
      stock,
      product_image
    );
    res.status(200).json({ products: products_update });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const patchProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, product_image } = req.body;
  try {
    const patchProduct = await patchUpdateProduct(
      id,
      name,
      description,
      price,
      stock,
      product_image
    );
    res.status(200).json({ products: patchProduct });
  } catch (error) {
    console.log(error);
    // const errorFound = findError(error.code);
    // return res
    //   .status(errorFound[0].status)
    //   .json({ error: errorFound[0].message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await destroyProduct(id);
    if (deleteProduct === 0) {
      return res.status(404).json({ message: "No existe el registro" });
    }
    res.json({ message: "product deleted", product: deleteProduct });
  } catch (error) {
    console.log(error);
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

//carro de compra

const addCart = async (req, res) => {
  try {
    // esto puede venir directo del front.. si se guardan los datos en un useState
    const {
      client_rut,
      product_code,
      product_price,
      product_amount,
      total_price
    } = req.body;

    const result = await createStoreCart(
      client_rut,
      product_code,
      product_price,
      product_amount,
      total_price
    );
    res.status(201).json({ cart: result });
  } catch (error) {
    console.log(error);
    // const errorFound = findError(error.code);
    // return res
    //   .status(errorFound[0].status)
    //   .json({ error: errorFound[0].message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await destroyCart(id);
    res.json({ message: "cart terminated", cart: result });
  } catch (error) {
    console.log(error);
    // const errorFound = findError(error.code);
    // return res
    //   .status(errorFound[0].status)
    //   .json({ error: errorFound[0].message });
  }
};

// crear la orden de compra
const buyOrder = async (req, res) => {
  try {
    const {
      cart_id,
      client_rut,
      postal_code,
      product_code,
      product_price,
      product_amount,
      total_price
    } = req.body;

    const result = await createStoreCart(
      cart_id,
      client_rut,
      postal_code,
      product_code,
      product_price,
      product_amount,
      total_price
    );
    res.status(201).json({ Buy_Order: result });
  } catch (error) {
    console.log(error);
    // const errorFound = findError(error.code);
    // return res
    //   .status(errorFound[0].status)
    //   .json({ error: errorFound[0].message });
  }
};

//historial de ventas
const salesHistory = async (req, res) => {
  try {
    const {
      client_rut,
      postal_code,
      product_code,
      product_price,
      product_amount,
      total_price,
      send_at
    } = req.body;

    const result = await createStoreCart(
      client_rut,
      postal_code,
      product_code,
      product_price,
      product_amount,
      total_price,
      send_at
    );

    res.status(201).json({ added_to_history: result });
  } catch (error) {
    console.log(error);
    // const errorFound = findError(error.code);
    // return res
    //   .status(errorFound[0].status)
    //   .json({ error: errorFound[0].message });
  }
};

export {
  getAllProducts,
  updateProducts,
  deleteProduct,
  createProducts,
  getProductsById,
  patchProduct,
  addCart,
  buyOrder,
  salesHistory,
  removeFromCart
};
