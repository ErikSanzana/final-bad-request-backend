import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

const createUser = async (email, password, rut, name, last_name, last_name_second, birth_date ) => {
  const hashedPassword = bcrypt.hashSync(password)
  const SQLquery = {
    text: `INSERT INTO "user" (email, password, rut, name, last_name, last_name_second, birth_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
    values: [email, hashedPassword, rut, name, last_name, last_name_second, birth_date],
  };

  console.log("query?", SQLquery)

  const response = await pool.query(SQLquery);
  console.log("response?", response)
  return response.rows[0];
};


const byEmail = async ({email}) => {
  const SQLquery = {
    text: "SELECT * FROM user WHERE email = $1",
    values: [email],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
}
export { createUser, byEmail };
