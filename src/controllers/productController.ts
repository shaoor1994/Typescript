// controllers/bookController.ts
import { Request, Response } from "express";
import Product from "../Product";

// We'll start with allBooks which will return
// every we have from our database
export let allProducts = (req: Request, res: Response) => {
  let products = Product.find((err: any, products: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(products);
    }
  });
};

export let getProduct = (req: Request, res: Response) => {
    let product = Product.findById(req.params.id, (err: any, product: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(product);
        }
    });
};

export let deleteProduct = (req: Request, res: Response) => {
    let product = Product.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Succesfully Deleted Product");
        }
    });
};

export let updateProduct = (req: Request, res: Response) => {
    console.log(req.body);
    let product = Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, book: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Succesfully updated product!");
            }
        }
    );
};

export let addProduct = (req: Request, res: Response) => {
    var product = new Product(req.body);
    console.log(req.body);
    console.log(product);
    product.save((err: any) => {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(product);
            res.send(product);
        }
    });
};