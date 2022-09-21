import express, { Request, Response } from "express";

import * as productController from "./controllers/productController";

// Our Express APP config
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("Welcome to Product Api"))

// API Endpoints
app.get("/products", productController.allProducts);
app.get("/product/:id", productController.getProduct);
app.post("/product", productController.addProduct);
app.put("/product/:id", productController.updateProduct);
app.delete("/product/:id", productController.deleteProduct);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});