import pool from "../../../../config/db/conectionDb.js";


export const createUser = async ( rut, name, last_name, postal_code, email, password, birth_date, rol ) => {
  const SQLquery = {
    text: 'INSERT INTO "user" (rut, name, last_name, postal_code, email, password, birth_date, rol ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ; ',
    values: [rut, name, last_name, postal_code, email, password, birth_date,rol],
  };
  // console.log(SQLquery)
  const response = await pool.query(SQLquery);
  // console.log(response)
  return response.rows[0];
};

export const updateUser = async (id, rut, name, last_name, postal_code, email, password, birth_date, rol) => {
  const SQLquery = {
    text: 'UPDATE "user" SET rut = $2, name = $3, last_name = $4, postal_code = $5, email = $6, password = $7, birth_date = $8, rol = $9, updated_at = NOW() WHERE id = $1 RETURNING *;',
    values: [id, rut, name, last_name, postal_code, email, password, birth_date, rol],
  };

  const response = await pool.query(SQLquery);
  
  return response.rows[0];
};

