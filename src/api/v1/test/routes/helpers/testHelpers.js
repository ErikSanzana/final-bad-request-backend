import app from "../../../../../../server.js";
import request from "supertest";
import { faker } from "@faker-js/faker";



//products
export const getId = async () => {
    try {
      const response = await request(app).get("/api/v1/products");
      const id = response.body.products[0].id;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

export const fakeProduct = {
    name: "TesterProperty",
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 100, max: 99999, dec: 0 }),
    stock: faker.number.int(99),
    product_image: faker.image.urlLoremFlickr({ category: "kitten" })
  };

export const fakeProductUpdate = {
    name: "TesterProperty",
    description: faker.airline.aircraftType(),
    price: faker.number.int(50),
    stock: faker.number.int(10),
    product_image: faker.image.urlLoremFlickr({ category: "dog" })
};
  



//user