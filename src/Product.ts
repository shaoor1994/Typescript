import { connect, model, Schema  } from "mongoose";
const { Timestamp } = require('mongodb');
const uri: string = "mongodb://127.0.0.1:27017/productApi";

connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export const ProductsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
},
{ timestamps: true } // this will store time for both create time and update time
);

const Products = model("Products", ProductsSchema);
export default Products;