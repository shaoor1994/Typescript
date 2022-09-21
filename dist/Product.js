"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSchema = void 0;
var mongoose_1 = require("mongoose");
var Timestamp = require('mongodb').Timestamp;
var uri = "mongodb://127.0.0.1:27017/productApi";
(0, mongoose_1.connect)(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.ProductsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true } // this will store time for both create time and update time
);
var Products = (0, mongoose_1.model)("Products", exports.ProductsSchema);
exports.default = Products;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIlByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW1EO0FBQzNDLElBQUEsU0FBUyxHQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBdkIsQ0FBd0I7QUFDekMsSUFBTSxHQUFHLEdBQVcsc0NBQXNDLENBQUM7QUFFM0QsSUFBQSxrQkFBTyxFQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVE7SUFDcEIsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQ3hDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFVSxRQUFBLGNBQWMsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDdkMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3RDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUN4QyxFQUNELEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLDREQUE0RDtDQUNoRixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsSUFBQSxnQkFBSyxFQUFDLFVBQVUsRUFBRSxzQkFBYyxDQUFDLENBQUM7QUFDbkQsa0JBQWUsUUFBUSxDQUFDIn0=