import express from "express";
import { db } from "./db/index.js";
import { products, users } from "./db/schema.js";
import { eq } from "drizzle-orm";

const router = express.Router();
/*
router.get("/products", (request, response) => {
  return response.json(products);
});

router.get("/products/id/:id", (request, response) => {
  const { id } = request.params;

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return response.status(404).json({ error: "Product not found" });
  }

  response.json(product);
});

router.get("/products/brand/:brand", blockSpecialBrand, (request, response) => {
  const { brand } = request.params;

  const filteredProducts = products.filter(
    (product) => product.brand === brand
  );

  response.json(filteredProducts);
});

router.get("/productswitherror", (request, response) => {
  let err = new Error("processing error");
  err.statusCode = 400;
  throw err;
});*/

router.post("/products", async (request, response) => {
  const { body } = request;
  await db.insert(products).values(body);
  return response.sendStatus(201);
});

router.get("/products", async (request, response) => {
  const products = await db.query.products.findMany();

  return response.json(products);
});

router.get("/users/:id/products", async (request, response) => {
  const { id } = request.params;
  const userProdusts = await db.query.products.findMany({
    where: eq(products.userId, +id),
  });
  return response.json(userProdusts);
});

export default router;
