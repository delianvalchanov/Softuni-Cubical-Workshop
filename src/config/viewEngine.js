const handlebars = require("express-handlebars");

function setupViewEngine(app) {
  app.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
      //Can change name of the main file -> defaultLayout
      //Can change path of the main file -> layoutsDir
      //Can change partials directory -> partialsDir
    })
  );
  app.set("view engine", "hbs");
  app.set("views", "./src/views");
}

module.exports = setupViewEngine;
