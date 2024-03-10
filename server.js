import express from "express";
import cors from "cors";
import productRoutes from "./config/routes/productRoutes.js";


import loginRoutes from "./config/routes/loginRoutes.js";
// import travelsRouter from "./config/routes/travelRoutes.js";

// import userRoutes from "./config/routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT||3000;

// swagger(app)
app.options("*", cors());
app.use(express.json());
app.use("/api/v1", productRoutes);
app.use("/api/v1", loginRoutes);
// app.use("*", notFound); // para rutas inexistentes //tengo duda existencial si va aca o en las routes como lo deje ( o si en 1 de los archivos solamente)

// app.use("/api/v1", userRoutes);
// app.use("/api/v1", loginRoutes);



app.listen(PORT, (error) => {
  if (error) {
    console.log("CHECK THIS!!!: ", error);
  } else {
    console.log(` app listening at ⚡http://localhost:${PORT}  ⚡`);
    // console.log(`Swagger docs available at http://localhost:${PORT}/api/v1/docs`);
  }
});



export default app;
