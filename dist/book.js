"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSchema = void 0;
var mongoose_1 = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/Check";
(0, mongoose_1.connect)(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.ProductsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Products = (0, mongoose_1.model)("Products", exports.ProductsSchema);
exports.default = Products;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWtEO0FBRWxELElBQU0sR0FBRyxHQUFXLGlDQUFpQyxDQUFDO0FBRXRELElBQUEsa0JBQU8sRUFBQyxHQUFHLEVBQUUsVUFBQyxHQUFRO0lBQ3BCLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxjQUFjLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQ3ZDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDekMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxRQUFRLEdBQUcsSUFBQSxnQkFBSyxFQUFDLFVBQVUsRUFBRSxzQkFBYyxDQUFDLENBQUM7QUFDbkQsa0JBQWUsUUFBUSxDQUFDIn0=