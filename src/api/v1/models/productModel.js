import pool from "../../../../config/db/conectionDb.js";


//ACTUALIZAR PARAMETROS SEGÚN TABLAS DE LA BASE DE DATOS

const getProduct = async () => {
  const SQLquery = { text: "SELECT * FROM products" };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const ProductsById = async (id) => {
  const SQLquery = {
    text: "SELECT * FROM products WHERE id = $1",
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
const createProduct = async (productData) => {
  try {
    const { name, description, price, stock, product_image } = productData;
    const SQLquery = {
      text: "INSERT INTO products (name, description, price, stock, product_image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      values: [name, description, price, stock, product_image],
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }
};

const updateProduct = async (productId, updatedProductData) => {
  try {
    const { name, description, price, stock, product_image } =
      updatedProductData;
    const SQLquery = {
      text: "UPDATE products SET name = $1, description = $2, price = $3, stock = $4, product_image = $5 WHERE id = $6 RETURNING *",
      values: [name, description, price, stock, product_image, productId],
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
  } catch (error) {
    throw new Error("Error updating product: " + error.message);
  }
};

const destroyProduct = async (id) => {
  const SQLquery = {
    text: "DELETE FROM products WHERE id = $1",
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rowCount;
};

export {
  getProduct,
  updateProduct,
  destroyProduct,
  createProduct,
  ProductsById,
};
