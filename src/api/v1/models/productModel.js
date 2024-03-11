import pool from "../../../../config/db/conectionDb.js";
//ACTUALIZAR PARAMETROS SEGÚN TABLAS DE LA BASE DE DATOS
// parametros desde la DB para productos  ( name, description, price, stock, product_image )

const getProduct = async () => {
  const SQLquery = { text: "SELECT * FROM products" };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const ProductsById = async (id) => {
  const SQLquery = {
    text: "SELECT * FROM products WHERE id = $1",
    values: [id]
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const createProduct = async (productData) => {
  try {
    const { name, description, price, stock, product_image } = productData;
    const SQLquery = {
      text: "INSERT INTO products (name, description, price, stock, product_image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      values: [name, description, price, stock, product_image]
    };
    const response = await pool.query(SQLquery);
    return response.rows[0];
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }
};

const updateProduct = async (
  id,
  name,
  description,
  price,
  stock,
  product_image
) => {
  try {
    const SQLquery = {
      text: "UPDATE products SET name = $1, description = $2, price = $3, stock = $4, product_image = $5 WHERE id = $6 RETURNING *",
      values: [name, description, price, stock, product_image, id]
    };
    const response = await pool.query(SQLquery);
    if (response.rowCount == 0) {
      throw new Error("Not Found, check ID");
    }
    return response.rows[0];
  } catch (error) {
    throw new Error("Error updating product: " + error.message);
  }
};

const destroyProduct = async (id) => {
  const SQLquery = {
    text: "DELETE FROM products WHERE id = $1",
    values: [id]
  };
  const response = await pool.query(SQLquery);

  return response.rowCount[0];
};

const patchUpdateProduct = async (
  id,
  name,
  description,
  price,
  stock,
  product_image
) => {
  try {
    const SQLquery = {
      text: "UPDATE products SET name = COALESCE($2,name),  description = COALESCE($3, description), price = COALESCE($4, price), stock = COALESCE($5,stock), product_image= COALESCE($6, product_image) WHERE id= $1  RETURNING * ;",
      values: [id, name, description, price, stock, product_image]
    };
    const response = await pool.query(SQLquery);
    // console.log(response.rows)
    return response.rows[0];
  } catch (error) {
    console.log(error);
  }
};
// pal carro

const createStoreCart = async (
  client_rut,
  product_id,
  product_price,
  product_amount,
  total_price
) => {
  const SQLquery = {
    text: "INSERT INTO store_cart (client_rut, product_code, product_price, product_amount, total_price) VALUES ($1,$2,$3,$4,$5) RETURNING *; ",
    values: [client_rut, product_id, product_price, product_amount, total_price]
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

//para buy order 66

const createBuyOrder = async (
  cart_id,
  client_rut,
  postal_code,
  product_code,
  product_price,
  product_amount,
  total_price
) => {
  const SQLquery = {
    text: "INSERT INTO store_cart (cart_id, client_rut, postal_code, product_code, product_price, product_amount, total_price) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *; ",
    values: [
      cart_id,
      client_rut,
      postal_code,
      product_code,
      product_price,
      product_amount,
      total_price
    ]
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

// historial, para el usuario o para el admin

const createOrderHistory = async (
  client_rut,
  postal_code,
  product_code,
  product_price,
  product_amount,
  total_price,
  send_at
) => {
  const SQLquery = {
    text: "INSERT INTO store_cart (client_rut, postal_code, product_code, product_price, product_amount, total_price, send_at) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *; ",
    values: [
      client_rut,
      postal_code,
      product_code,
      product_price,
      product_amount,
      total_price,
      send_at
    ]
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export {
  getProduct,
  updateProduct,
  destroyProduct,
  createProduct,
  ProductsById,
  patchUpdateProduct,
  createStoreCart,
  createBuyOrder,
  createOrderHistory
};
