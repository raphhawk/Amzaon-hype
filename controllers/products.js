
const Product = require("../models/product");

//const products = [];

exports.getAddProduct = (req, res, next)=>{
  console.log("executiing middleware at /add-product");
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("admin/add-product", {
    pageTitle: "Add Product", 
    path: "/admin/add-product", 
    productCSS: true,
    formsCSS: true, 
    activeProduct: true
  });
};

exports.postAddProduct = (req, res, next)=>{
  //products.push({title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
}


exports.getProducts = (req, res, next)=>{
  console.log("executiing middleware at /");
  Product.fetchAll(products=>{
    res.render("shop/product-list", {
      prods: products, 
      path: "/",
      pageTitle: "Shop", 
      //hasProducts: products.length > 0,
      //activeShop: true,
      productCSS: true
    });
  });
}
