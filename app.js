const path        =  require("path");
const express     =  require("express");
const bodyParser  =  require("body-parser");
const adminData   =  require("./routes/admin");
const shopRoutes  =  require("./routes/shop");
//const expressHbs  =  require("express-handlebars");

const app = express();

//app.engine("hbs", expressHbs({
//  defaultLayout: "main-layout",
//  extname: ".hbs",
//  layoutsDir: path.join(__dirname, "/views/layouts")
//}));

app.set("view engine", "ejs");
app.set("views", "views");
//app.set("view engine", "pug");
//app.set("views", "views");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use((req, res, next)=>{
  //res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
  res.status(404).render("not-found", {pageTitle: "Not Found"});
});


console.log("Listening on port 8080");
app.listen(8080);
