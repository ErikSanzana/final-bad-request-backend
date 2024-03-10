import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

// datos usuarios    ( id, rut, name, last_name, postal_code, email, password, birth_date, rol )
// rol= admin debe ser un usuario ya creado en la DB

const createUser = async (id, rut, name, last_name, postal_code, email, password, birth_date, rol  ) => {
  const hashedPassword = bcrypt.hashSync(password);

  const SQLquery = {
    text: `INSERT INTO user (rut, name, last_name, postal_code, email, password, birth_date, rol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ;`,
    values: [rut, name, last_name, postal_code, email, hashedPassword, birth_date, rol , user],
  };

  // console.log("query?", SQLquery)

  const response = await pool.query(SQLquery);

  // console.table("response?", response)

  return response.rows[0];
};


const byEmail = async ({ email }) => {
  const SQLquery = {
    text: "SELECT * FROM user WHERE email = $1",
    values: [email],
  };
  const response = await pool.query(SQLquery);
  if (response.rowCount == 0) {
    throw new Error("Not Found post from that mail");
  }
  return response.rows[0];
};


//rut cuenta como el id de cada usuario para esto como es unico... 
const getByRut = async ({ rut }) => {
  const SQLquery = {
    text: "SELECT * FROM user WHERE rut = $1 ; ",
    values: [rut],
  };
  const response = await pool.query(SQLquery);
  if (response.rowCount == 0) {
    throw new Error("Not Found users whit that RUT ");
  }
  console.table(response)
  return response.rows;
};



// add to  on favorites

const createFavorites = async (client_rut, product_id) => {
  const SQLquery = {
    text: "INSERT INTO favorites (client_rut, product_id) VALUES ($1, $2) RETURNING *",
    values: [client_rut, product_id],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const liked = async (client_id) => {
  const SQLquery = {
    text: "SELECT * FROM favorites WHERE client_id = $1",
    values: [client_id],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const actualize = async (client_id) => {
  const SQLquery = {
    //text: "SELECT * FROM favorites WHERE client_id = $1",
    //values: [client_id],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

export { createUser, byEmail, createFavorites, liked, actualize };
