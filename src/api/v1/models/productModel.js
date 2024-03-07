import pool from "../../../../config/db/conectionDb";
import format from "pg-format";

const getProduct = async () => {
  const SQLquery = { text: "SELECT * FROM viajes" };
  const response = await pool.query(SQLquery);
  return response.rows;
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

export { getProduct, updateProduct, destroyProduct };
