import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

//Table: user
const createUser = async (
  rut,
  name,
  last_name,
  postal_code,
  email,
  password,
  birth_date,
  rol
) => {
  const hashedPassword = bcrypt.hashSync(password);
  const SQLquery = {
    text: 'INSERT INTO "user" (rut, name, last_name, postal_code, email, password, birth_date, rol ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ; ',
    values: [
      rut,
      name,
      last_name,
      postal_code,
      email,
      hashedPassword,
      birth_date,
      rol,
    ],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const updateUsers = async (
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
    ],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const getUserAll = async () => {
  const SQLquery = {
    text: 'SELECT * FROM "user" ;',
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const getUser = async (id) => {
  const query = {
    text: 'SELECT * FROM "user" WHERE id = $1',
    values: [id],
  };
  const response = await pool.query(query);
  return response.rows[0];
};

const deleteUserByIds = async (id) => {
  const query = {
    text: 'DELETE FROM "user" WHERE id = $1 RETURNING *',
    values: [id],
  };
  const response = await pool.query(query);
  if (response.rowCount == 0) {
    throw new Error("This item has already been deleted or not exist...");
  }
  return response.rows;
};

//Address table
const createAddress = async (
  postal_code,
  street_name,
  phone,
  number,
  comune,
  city,
  region
) => {
  const SQLquery = {
    text: "INSERT INTO address (postal_code, street_name, phone, number, comune, city, region ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ; ",
    values: [postal_code, street_name, phone, number, comune, city, region],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const editAddress = async (
  postal_code,
  street_name,
  phone,
  number,
  comune,
  city,
  region
) => {
  const SQLquery = {
    text: "UPDATE SET street_name = COALESCE($2, street_name), phone = COALESCE($3, phone), number = COALESCE($4, number), comune = COALESCE($5, comune), city = COALESCE($6, city), region = COALESCE($7, region), WHERE postal_code = $1 RETURNING *;",
    values: [postal_code, street_name, phone, number, comune, city, region],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteAddress = async (postal_code) => {
  const SQLquery = {
    text: 'DELETE FROM "address" WHERE postal_code = $1 RETURNING *',
    values: [postal_code],
  };
  const response = await pool.query(SQLquery);
  if (response.rowCount == 0) {
    throw new Error("This item has already been deleted or not exist...");
  }
  return response.rows;
};

//table: favorites

const getFavoritesByUsers = async (client_rut) => {
  const query = {
    text: 'SELECT * FROM "favorites" WHERE client_rut = $1;',
    values: [client_rut],
  };
  const response = await pool.query(query);
  return response.rows[0];
};

const addToFavorites = async (client_rut, product_id) => {
  const query = {
    text: 'INSERT INTO "favorites" (client_rut, product_id) VALUES ($1, $2) RETURNING *',
    values: [client_rut, product_id],
  };
  const response = await pool.query(query);
  return response.rows[0];
};
const deleteFavorites = async (favorites_id) => {
  const SQLquery = {
    text: 'DELETE FROM "favorites" WHERE favorites_id = $1 RETURNING *',
    values: [favorites_id],
  };
  const response = await pool.query(SQLquery);
  if (response.rowCount == 0) {
    throw new Error("This item has already been deleted or not exist...");
  }
  return response.rows;
};

const byEmail = async ({ email }) => {
  console.log(email);
  const SQLquery = {
    text: 'SELECT * FROM "user" WHERE email = $1',
    values: [email],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export {
  createUser,
  updateUsers,
  getUser,
  getFavoritesByUsers,
  addToFavorites,
  deleteUserByIds,
  getUserAll,
  createAddress,
  deleteAddress,
  deleteFavorites,
  editAddress,
  byEmail,
};
