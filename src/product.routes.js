import express from "express";
import products from "./products.js";
import { blockSpecialBrand } from "./middleware.js";

const router = express.Router();

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
});

export default router;
