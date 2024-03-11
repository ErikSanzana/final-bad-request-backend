import pool from "../../../../config/db/conectionDb.js";

// USER es palabra reservada en postgresql, al llamar usar "user"

export const createUser = async (
  rut,
  name,
  last_name,
  postal_code,
  email,
  password,
  birth_date,
  rol
) => {
  const SQLquery = {
    text: 'INSERT INTO "user" (rut, name, last_name, postal_code, email, password, birth_date, rol ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ; ',
    values: [
      rut,
      name,
      last_name,
      postal_code,
      email,
      password,
      birth_date,
      rol
    ]
  };
  // console.log(SQLquery)
  const response = await pool.query(SQLquery);
  // console.log(response)
  return response.rows[0];
};

export const updateUsers = async (
  id,
  rut,
  name,
  last_name,
  postal_code,
  email,
  password,
  birth_date,
  rol
) => {
  const SQLquery = {
    text: 'UPDATE "user" SET rut = COALESCE($1, rut), name = COALESCE($2, name), last_name = COALESCE($3, last_name), postal_code = COALESCE($4, postal_code), email = COALESCE($5, email), password = COALESCE($6, password), birth_date = COALESCE($7, birth_date), rol = COALESCE($8, rol) WHERE id = $9 RETURNING *;',
    values: [
      rut,
      name,
      last_name,
      postal_code,
      email,
      password,
      birth_date,
      rol,
      id,
    ]
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export const getUserAll = async (id) => {
  const query = {
    text: 'SELECT * FROM "user"'
  };
  const response = await pool.query(query);

  return response.rows;
};

export const getUser = async (id) => {
  const query = {
    text: 'SELECT * FROM "user" WHERE id = $1',
    values: [id]
  };
  const response = await pool.query(query);
  return response.rows[0];
};

export const getFavoritesByUsers = async (client_rut) => {
  const query = {
    text: 'SELECT * FROM "favorites" WHERE client_rut = $1;',
    values: [client_rut]
  };
  const response = await pool.query(query);
  return response.rows[0];
};

export const addToFavorites = async (client_rut, product_id) => {
  const query = {
    text: 'INSERT INTO "favorites" (client_rut, product_id) VALUES ($1, $2) RETURNING *',
    values: [client_rut, product_id]
  };
  const response = await pool.query(query);
  return response.rows[0];
};

export const deleteUserByIds = async (id) => {
  const query = {
    text: 'DELETE FROM "user" WHERE id = $1 RETURNING *',
    values: [id]
  };
  const response = await pool.query(query);
  return response.rows[0];
};
