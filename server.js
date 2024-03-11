import express from "express";
import cors from "cors";
import productRoutes from "./config/routes/productRoutes.js";
import { logger } from "logger-express";  //NO ACTIVAR en testep
import loginRoutes from "./config/routes/loginRoutes.js";
//import userRoutes from "./config/routes/userRoutes.js";
//import travelsRouter from "./config/routes/travelRoutes.js";
//GRD
import userRoutesGrd from "./config/routes/userRoutesGrd.js";
// import userRoutes from "./config/routes/userRoutes.js";
import userRoutes from "./config/routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
import{V1SwaggerDocs } from './v1/swagger'

// swagger
app.options("*", cors());
app.use(express.json());
//grd
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
  V1SwaggerDocs(app, PORT)
});

export default app;
