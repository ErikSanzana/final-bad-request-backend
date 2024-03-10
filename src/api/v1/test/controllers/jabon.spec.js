import app from "../../../../../server.js";
import request from "supertest";
import { faker } from "@faker-js/faker";
const generateJWT = require('../../helpers/generate_jwt.js');
//importar models

describe("Crud JAbon JAbonero Jabonado de Jamon A.k.a. CRUD JA JA JA JA", () => {


  describe("login thru GET  {/ RUTA PARA GET ACA (como ejemplo) esperar a que esten listas y copiar pegar :D} ", () => {
    const token = generateToken();
    it("Should DO SOMETHING WITH DA GET", async () => {
      const response = await request(app)
        .get("/api/v1/jabon ") //aca la ruta
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
    

