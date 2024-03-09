import app from "../../../../../server.js";
import jwt from "jsonwebtoken";
import request from "supertest";
import { faker } from "@faker-js/faker";
// import { generateToken } from "../utils.js/login.js";
//importar models

describe("Crud JAbon JAbonero Jabonado de Jamon A.k.a. CRUD JA JA JA JA", () => {

  // si practico chistes fomes aca....
    // escribir lo relacionado con cada ruta, get obtiene algo, que hace y que se espera
    
// Login

    describe("USER login", () => {
        const tolkien = generateToken();
        it("login a user account", async () => {
            const {params}
        })
    });


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
        .get("/api/v1/jabon")
        .set("Authorization", `Bearer ${token}`);
      expect(response.statusCode).toBe(401);
    });

    it("return message with invalid token", async () => {
      const token = faker.string.alphanumeric();
      const response = await request(app)
        .get("/api/v1/jabon ")
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error).toBe("el token no es valido");
    });
      
    it("return 401 with token empty", async () => {
        const token = null;
        const response = await request(app)
          .get("/api/v1/jabon")
          .set("Authorization", `Bearer ${token}`);
        expect(response.statusCode).toBe(401);
      });
      
      
      
      
  });
    
    
    //final funcion describe CRUD ( linea inicio 8 )
});