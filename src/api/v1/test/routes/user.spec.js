import app from "../../../../../server.js";
import request from "supertest";
import { faker } from "@faker-js/faker";


// const generateJWT = require("../../helpers/generate_jwt.js");
//importar models

describe("test the test", () => {
  const sumar = (a, b) => a + b;
  describe("Testing unitario con Jest", () => {
    it("Comprobando el resultado de una sumatoria", () => {
      const n1 = 4;
      const n2 = 5;
      const resultado = sumar(n1, n2);
      expect(resultado).toBe(9);
    });
  });
});

describe("Crud JAbon JAbonero Jabonado de Jamon A.k.a. CRUD JA JA JA JA", () => {
  // primero users y despues products ?
  // https://fakerjs.dev/api/simpleFaker.html data de feiker


  const fakeUser = {
    rut: faker.number.int(),
    name:  faker.person.firstName(),
    last_name: faker.person.lastName(),
    postal_code: faker.number.int(),
    email: faker.internet.email(),
    password: faker.animal.crocodilia(),
    birth_date: faker.person.birthdate(),
    rol: "user"
  };

  const fakeUser2 = 
    { 
      "rut": 129996789,
      "name": "John",
      "last_name": "Doe",
      "postal_code": 1239945,
      "email": "john.doe@example.com",
      "password": "secretpassword",
      "birth_date": "02/03/2024",
    "rol":"user"
      
  };



  



  describe("products related tests  ", () => {
    // const token = generateToken();

    const getId = async () => {
      try {
        const response = await request(app).get("/api/v1/products");
        const id = response.body.products[0].id;
        return id;
      } catch (error) {
        console.error(error)
      }
    };


    it("post a new product ", async () => {
      const response = await request(app)
        .post("/api/v1/admin/products")
        // .set("Authorization", `Bearer ${token}`)
        .send(fakeProduct);
      expect(response.statusCode).toBe(201);
    });

    it(" update a product by id", async () => {
      const id = await getId()
      const response = await request(app)
        .put(`/api/v1/admin/product/${id}`)
        // .set("Authorization", `Bearer ${token}`)
        .send(fakeProductUpdate);
      expect(response.statusCode).toBe(200);
    }, 3000);

    it(" patch a single value from a product ", async () => {
      const id = await getId()
      const response = await request(app)
        .patch(`/api/v1/admin/product/${id}`)
        // .set("Authorization", `Bearer ${token}`)
        .send({
          name: "AYUUUUUUUUUUUUUUDA"
        });
      console.log(response.data)
      expect(response.statusCode).toBe(200);
      expect(response.body.products).toBeTruthy();
    });

    it("finds products ", async () => {
      const response = await request(app).get("/api/v1/products");
      // .set("Authorization", `Bearer ${token}`);
      expect(response.statusCode).toBe(200);
    });

    it("finds a single product by ID ", async () => {
      const id = await getId()
      const response = await request(app)
        .get(`/api/v1/admin/product/${id}`);
      // .set("Authorization", `Bearer ${token}`);
      // expect(response.statusCode).toBe(200);
      console.log(response)
      expect(response.statusCode).toBe(200);
    });



    it("Deletes a product (faker created)", async () => {
        const id = await getId()
        const response = await request(app)
          .delete(`/api/v1/product/${id}`)
          // .set("Authorization", `Bearer ${token}`)
          .send();
        expect(204);
      });
    });


  
  });
  
