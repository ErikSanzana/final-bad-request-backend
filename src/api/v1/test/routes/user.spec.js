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

describe("Crud Users", () => {
  // primero users y despues products ?
  // https://fakerjs.dev/api/simpleFaker.html data de feiker

  const getId = async () => {

      const response = await request(app).get("/api/v1/user/admin");
      const id = response.body.user[0].id;
      return id;

  };

  const fakeUser = {
    rut: faker.number.int({ min: 10, max: 100 }) ,
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    postal_code: faker.number.int({ min: 10, max: 100 }) ,
    email: faker.internet.email(),
    password: faker.number.int({ min: 166666, max: 100000000 }) ,
    birth_date: faker.date.birthdate(),
    rol: "user"
  };

  const fakeUserUpdate = {
    name: faker.animal.cow(),
    last_name: faker.animal.horse(),
    postal_code: faker.number.int({ min: 10, max: 100 }) ,
    email: faker.internet.email(),
    password: faker.number.int({ min: 166666, max: 100000000 }) ,
    birth_date: faker.date.birthdate(),
    rol: "user"
  };

  const fakeFavorites = {
    client_rut: 99999,
    product_id: "d258f3e6-09f9-4644-b197-f9fd066bc68e"
  };

  it("creates USER  ", async () => {
    const response = await request(app)
      .post("/api/v1/user")
      // .set("Authorization", `Bearer ${token}`)
      .send(fakeUser);
    expect(response.statusCode).toBe(201);
  });

  it(" update a USER by id", async () => {
    const id = await getId();
    const response = await request(app)
      .put(`/api/v1/user/${id}`)
      // .set("Authorization", `Bearer ${token}`)
      .send(fakeUserUpdate);
    console.log(response)
    expect(response.statusCode).toBe(200);
  }, 3000);

  // it(" patch a single value from a product ", async () => {
  //   const id = await getId()
  //   const response = await request(app)
  //     .patch(`/api/v1/admin/product/${id}`)
  //     // .set("Authorization", `Bearer ${token}`)
  //     .send({
  //       name: "AYUUUUUUUUUUUUUUDA"
  //     });
  //   console.log(response.data)
  //   expect(response.statusCode).toBe(200);
  //   expect(response.body.products).toBeTruthy();
  // });

  it("finds USER ", async () => {
    const response = await request(app).get("/api/v1/user/admin/");
    // .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("finds a single product by ID ", async () => {
    const id = await getId();
    console.log(id)
    const response = await request(app)
    // console.log(response);
      .get(`/api/v1/user/admin/${id}`);
    // .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("Deletes a product (faker created)", async () => {
    const id = await getId();
    const response = await request(app)
      .delete(`/api/v1/admin/user/:id`)
      // .set("Authorization", `Bearer ${token}`)
      .send();
    expect(204);
  });
});
