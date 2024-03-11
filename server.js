import express from "express";
import cors from "cors";
import productRoutes from "./config/routes/productRoutes.js";
// import { logger } from "logger-express";  //NO ACTIVAR en testep
import loginRoutes from "./config/routes/loginRoutes.js";
import userRoutes from "./config/routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// swagger(app)
app.options("*", cors());
app.use(express.json());
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
});

export default app;
