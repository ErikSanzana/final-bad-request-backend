import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import productRoutes from "./config/routes/productRoutes.js";
// import swagger from"./config/swagger/swagger.js";

// import travelsRouter from "./config/routes/travelRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";
import { createNewUser } from "./src/api/v1/controllers/usersController.js";
// import userRoutes from "./config/routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT||3000;

// swagger(app)
app.options("*", cors());
app.use(express.json());
app.use(logger("dev"));
app.use("/api/v1", productRoutes);
// app.use("/api/v1", userRoutes);
// app.use("/api/v1", travelsRouter);
app.use("/api/v1", loginRoutes);
app.use("/api/v1", createNewUser);




app.listen(PORT, (error) => {
  if (error) {
    console.log("CHECK THIS!!!: ", error);
  
  } else {
    console.log(` app listening at ⚡http://localhost:${PORT}  ⚡`);
    // console.log(`Swagger docs available at http://localhost:${PORT}/api/v1/docs`);
  }
});



export default app;
