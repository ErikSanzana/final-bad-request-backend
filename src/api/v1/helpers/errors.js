/* const ERRORS = [
  {
    code: "23502",
    status: 400,
    message: "El campo destino o presupuesto no puede estar vacío",
  },
  {
    code: "42P01",
    status: 500,
    message: "Error en la conexión con la base de datos",
  },
  { code: "22P02", status: 400, message: "El tipo de dato no corresponde" },
  { code: "22P02", status: 400, message: "Bad request" },
  { code: "42601", status: 400, message: "Error de sintaxis en la consulta" },
  { code: "auth_01", status: 400, message: "El usuario no existe" },
  { code: "auth_02", status: 400, message: "Contraseña inválida" },
  { code: "auth_03", status: 401, message: "El token debe estar presente" },
  { code: "auth_04", status: 401, message: "El token no es válido" },
];

export default ERRORS; */

const ERRORS = [

  { code: "auth_01", status: 400, message: "El usuario no existe" },
  { code: "auth_02", status: 400, message: "Contraseña inválida" },
  { code: "auth_03", status: 401, message: "El token debe estar presente" },
  { code: "auth_04", status: 401, message: "El token no es válido" },
];

export default ERRORS;
