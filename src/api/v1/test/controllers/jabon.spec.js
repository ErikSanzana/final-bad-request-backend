import app from "../../../../../server.js";
import request from "supertest";
import { faker } from "@faker-js/faker";
const generateJWT = require('../../helpers/generate_jwt.js');
//importar models

describe("Crud JAbon JAbonero Jabonado de Jamon A.k.a. CRUD JA JA JA JA", () => {

  // primero users y despues products ?
// https://fakerjs.dev/api/simpleFaker.html data de feiker

  // const fakeUser = {
  //   rut: faker.number.int(),
  //   name:  faker.person.firstName(),
  //   last_name: faker.person.lastName(),
  //   postal_code: faker.number.int(),
  //   email: faker.internet.email(),
  //   password: faker.animal.crocodilia(),
  //   birth_date: faker.person.birthdate(),
  //   rol: "user"
  // };

  // const fakeProduct = {
  //   name: faker.commerce.productName(),
  //   description: faker.commerce.productDescription(),
  //   price: faker.commerce.price({ min: 100, max: 99999 }),
  //   stock: faker.number.int(100),
  //   product_image: faker.image.urlLoremFlickr({ category: 'kitten' }),
  // };


  describe("products test,   ", () => {
    const token = generateToken();
    it("Should DO SOMETHING WITH DA GET", async () => {
      const response = await request(app)
        .post("/api/v1/user ") //aca la ruta
        .set("Authorization", `Bearer ${token}`);
      expect(response.statusCode).toBe(200);
    });

    it("Should GET SOMETHING WITH PRoperty....", async () => {
      const response = await request(app)
        .get("/api/v1/jabon")
        .set("Authorization", `Bearer ${token}`);
      expect(response.body).toHaveProperty("Que viene de como respuesta");
    });

    it("Should be an ARRAY, ", async () => {
      const response = await request(app)
        .get("/api/v1/jabon")
        .set("Authorization", `Bearer ${token}`);
      const { SOMETHING } = response.body;
      expect(SOMETHING).toBeInstanceOf(Array);
    });

    it("the previus SHOULD not be empty ARRAY", async () => {
      const response = await request(app)
        .get("/JABON")
        .set("Authorization", `Bearer ${token}`)
        .send();
      expect(response.body).not.toContainEqual({} || [] || null || undefined);
    });
  });
    
  describe("GET /api/v1/jabon with FAKE params", () => {
    it("return 401 with invalid token", async () => {
      const token = faker.string.alphanumeric();
      const response = await request(app)
        .get("/api/v1/products/")
        .set("Authorization", `Bearer ${token}`);
      expect(response.statusCode).toBe(401);
    });
  });




    it("return message with invalid token", async () => {
      const token = faker.string.alphanumeric();
      const response = await request(app)
      .get("/api/v1/products/")
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error).toBe(undefined);
    });
      
    it("return 401 with token empty", async () => {
        const token = null;
        const response = await request(app)
          .get("/api/v1/jabon")
          .set("Authorization", `Bearer ${token}`);
        expect(response.statusCode).toBe(404);
      });
      
      
      
      
  });
    


/* para abajo funciona */
  describe("Delete operations for /products", () => {

    let nonExistingId = faker.number.int({ min: 5, max: 100 })
    const token = generateJWT();
    
    it("DELETE /products/:id should return status code 404 when trying to delete a products with an id that does not exist", async () => {
        const response = await request(app).delete(`/products/${nonExistingId}`).set("Authorization", `Bearer ${token}`).send();
        expect(response.status).toBe(404);
    });
});