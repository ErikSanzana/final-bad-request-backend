import pool from "../../../../config/db/conectionDb";
import format from "pg-format";

//ACTUALIZAR PARAMETROS SEGÚN TABLAS DE LA BASE DE DATOS

const getProduct = async () => {
  const SQLquery = { text: "SELECT * FROM viajes" };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const ProductsById = async (id) => {
  const SQLquery = {
    text: "SELECT * FROM viajes WHERE id = $1",
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
const createProduct = async ({ destino, presupuesto }) => {
  const SQLquery = {
    text: "INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2) RETURNING *",
    values: [destino, presupuesto],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateProduct = async (id, { presupuesto, destino }) => {
  const SQLquery = {
    text: "UPDATE viajes SET presupuesto = $1, destino = $2 WHERE id = $3 RETURNING *",
    values: [presupuesto, destino, id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const destroyProduct = async (id) => {
  const SQLquery = {
    text: "DELETE FROM viajes WHERE id = $1",
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rowCount;
};

export { getProduct, updateProduct, destroyProduct, createProduct, ProductsById };
