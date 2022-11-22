const path = require("path");

const express = require("express");

const adminData = require("./admin");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next)=>{
  console.log("executiing middleware at /");
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", {
    prods: products, 
    path: "/",
    pageTitle: "Shop", 
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});


module.exports = router
