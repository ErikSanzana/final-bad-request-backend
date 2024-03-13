import express from "express";
import cors from "cors";
// import { logger } from "logger-express";  //NO ACTIVAR cuando se testeo  por algun motivo rompe todo => segun profe es problema de el middleware asi que se comenta en testeo.
import productRoutes from "./config/routes/productRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";
import userRoutes from "./config/routes/userRoutes.js";
// import{V1SwaggerDocs } from './v1/swagger'

const app = express();
// swagger
// app.use(logger());
app.options("*", cors());
app.use(express.json());
//deben llevar rutas diferentes  => o hay error
app.use("/api/v1/store", productRoutes);
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1", userRoutes);

// const PORT = 3001

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
  if (error) {
    console.log("CHECK THIS!!!: ", error);
  } else {
    console.log(` app listening at ⚡http://localhost:${PORT}⚡`);
    // console.log(`Swagger docs available at http://localhost:${PORT}/api/v1/docs`);
  }
  // V1SwaggerDocs(app, PORT)
});

export default app;