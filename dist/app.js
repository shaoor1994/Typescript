"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productController = __importStar(require("./controllers/productController"));
// Our Express APP config
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get("/", function (req, res) { return res.send("Welcome to Product Api"); });
// API Endpoints
app.get("/products", productController.allProducts);
app.get("/product/:id", productController.getProduct);
app.post("/product", productController.addProduct);
app.put("/product/:id", productController.updateProduct);
app.delete("/product/:id", productController.deleteProduct);
var server = app.listen(app.get("port"), function () {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBcUQ7QUFFckQsaUZBQXFFO0FBRXJFLHlCQUF5QjtBQUN6QixJQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztBQUUxQyxnQkFBZ0I7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUE7QUFFakYsZ0JBQWdCO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pELEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTVELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUMsQ0FBQyJ9