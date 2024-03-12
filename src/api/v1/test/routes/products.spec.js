import app from "../../../../../server.js";
import request from "supertest";
import { getId } from "./helpers/testHelpers.js";
import { fakeProduct } from "./helpers/testHelpers.js";
import { fakeProductUpdate } from "./helpers/testHelpers.js";

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

describe("Crud Products", () => {
  describe("products related tests  ", () => {
   

    it("post a new product ", async () => {
      const response = await request(app)
        .post("/api/v1/admin/products")
        // .set("Authorization", `Bearer ${token}`)
        .send(fakeProduct);
      expect(response.statusCode).toBe(201);
    });

    it(" update a product by id", async () => {
      const id = await getId();
      const response = await request(app)
        .put(`/api/v1/admin/product/${id}`)
        // .set("Authorization", `Bearer ${token}`)
        .send(fakeProductUpdate);
      expect(response.statusCode).toBe(200);
    }, 3000);

    it(" patch a single value from a product ", async () => {
      const id = await getId();
      const response = await request(app)
        .patch(`/api/v1/admin/product/${id}`)
        // .set("Authorization", `Bearer ${token}`)
        .send({
          name: "AYUUUUUUUUUUUUUUDA"
        });
      // console.log(response.data);
      expect(response.statusCode).toBe(200);
      expect(response.body.products).toBeTruthy();
    });

    it("finds products ", async () => {
      const response = await request(app).get("/api/v1/products");
      // .set("Authorization", `Bearer ${token}`);
      expect(response.statusCode).toBe(200);
    });

    it("finds a single product by ID ", async () => {
      const id = await getId();
      const response = await request(app).get(`/api/v1/admin/product/${id}`);
      // .set("Authorization", `Bearer ${token}`);
      // console.log(response);
      expect(response.statusCode).toBe(200);
    });

    it("Deletes a product (faker created)", async () => {
      const id = await getId();
      const forDelete = await request(app)
        .delete(`/api/v1/product/${id}`)
        // .set("Authorization", `Bearer ${token}`)
        .send();
      console.log(forDelete)
      expect(204);
    });
  });
});
