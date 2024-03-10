const validateParametersUser = (req, res, next) => {
  const { user } = req.body;
  if (
    !user.email ||
    !user.password ||
    !user.rut ||
    !user.name ||
    !user.last_name ||
    !user.last_name_second ||
    !user.birth_date
  ) {
    return res.status(400).json({
      error:
        "El email, contraseña, rut, nombre, apellido, segundo apellido y fecha de nacimiento deben estar presentes",
    });
  }
  next();
};

export { validateParametersUser };
