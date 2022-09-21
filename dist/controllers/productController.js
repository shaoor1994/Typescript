"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.updateProduct = exports.deleteProduct = exports.getProduct = exports.allProducts = void 0;
var Product_1 = __importDefault(require("../Product"));
// We'll start with allBooks which will return
// every we have from our database
var allProducts = function (req, res) {
    var products = Product_1.default.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(products);
        }
    });
};
exports.allProducts = allProducts;
var getProduct = function (req, res) {
    var product = Product_1.default.findById(req.params.id, function (err, product) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(product);
        }
    });
};
exports.getProduct = getProduct;
var deleteProduct = function (req, res) {
    var product = Product_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Product");
        }
    });
};
exports.deleteProduct = deleteProduct;
var updateProduct = function (req, res) {
    console.log(req.body);
    var product = Product_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated product!");
        }
    });
};
exports.updateProduct = updateProduct;
var addProduct = function (req, res) {
    var product = new Product_1.default(req.body);
    console.log(req.body);
    console.log(product);
    product.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(product);
            res.send(product);
        }
    });
};
exports.addProduct = addProduct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9wcm9kdWN0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSx1REFBaUM7QUFFakMsOENBQThDO0FBQzlDLGtDQUFrQztBQUMzQixJQUFJLFdBQVcsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ25ELElBQUksUUFBUSxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxFQUFFLFFBQWE7UUFDbEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVJTLFFBQUEsV0FBVyxlQVFwQjtBQUVLLElBQUksVUFBVSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDaEQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFRLEVBQUUsT0FBWTtRQUNqRSxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQVJTLFFBQUEsVUFBVSxjQVFuQjtBQUVLLElBQUksYUFBYSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbkQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFDLEdBQVE7UUFDN0QsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQVJTLFFBQUEsYUFBYSxpQkFRdEI7QUFFSyxJQUFJLGFBQWEsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsaUJBQWlCLENBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNiLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsVUFBQyxHQUFRLEVBQUUsSUFBUztRQUNoQixJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUMsQ0FDSixDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBYlMsUUFBQSxhQUFhLGlCQWF0QjtBQUVLLElBQUksVUFBVSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDaEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1FBQ2xCLElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQWJTLFFBQUEsVUFBVSxjQWFuQiJ9