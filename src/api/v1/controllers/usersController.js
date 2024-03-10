import { createFavorites, createUser } from "../models/userModel.js";
import { findError } from "../utils/utils.js";


// datos usuarios    ( id, rut, name, last_name, postal_code, email, password, birth_date, rol )


const createNewUser = async (req, res) => {
  try {
    const { rut, name, last_name, postal_code, email, password, birth_date, rol } = req.body;
    
    // console.log("user?", req.body)

    const newUser = await createUser(email, password, rut, name, last_name, last_name_second, birth_date);

    // console.log("newUser?", newUser)

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.log(error);
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};





// favoritos 
const addFavorites = async (req, res) => {
  try {
    //hay que sacar el cliente_rut del cliente logeado, pero no se si eso se ve por front  o por back
    const { client_rut, product_id } = req.body;

    const result = await createFavorites(client_rut, product_id);

    res.status(201).json({ Liked : result });

  } catch (error) {
    console.log(error)
    // const errorFound = findError(error.code);
    // return res
    //   .status(errorFound[0].status)
    //   .json({ error: errorFound[0].message });
  }
};



export { createNewUser, addFavorites,  };
