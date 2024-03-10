import pool from '../database'; // Asegúrate de importar tu instancia de pool de PostgreSQL

const createUser = async ({ rut, name, last_name, postal_code, email, password, birth_date, rol, is_banned }) => {
  const SQLquery = {
    text: "INSERT INTO users (rut, name, last_name, postal_code, email, password, birth_date, rol, is_banned, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW()) RETURNING *;",
    values: [rut, name, last_name, postal_code, email, password, birth_date, rol, is_banned],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
