
const express           = require("express");
const productController = require("../controllers/products"); 

const router = express.Router();

// '/admin/add-product' => GET
router.get("/add-product", productController.getAddProduct);
router.get("/products", productController.getProducts);

// '/admin/add-product' => POST
router.post("/add-product", productController.postAddProduct);

module.exports = router;
