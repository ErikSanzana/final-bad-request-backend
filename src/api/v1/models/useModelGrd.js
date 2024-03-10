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
