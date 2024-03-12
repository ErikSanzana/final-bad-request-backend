import express from "express";
import cors from "cors";
import { logger } from "logger-express";  //NO ACTIVAR cuando se testeo  por algun motivo rompe todo => segun profe es problema de el middleware asi que se comenta en testeo.
import productRoutes from "./config/routes/productRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";
import userRoutes from "./config/routes/userRoutes.js";
// import{V1SwaggerDocs } from './v1/swagger'


const app = express();
const PORT = process.env.PORT || 3000;

// swagger
app.options("*", cors());
app.use(express.json());
app.use(logger());
app.use("/api/v1", productRoutes);
app.use("/api/v1", loginRoutes);
app.use("/api/v1", userRoutes);

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
