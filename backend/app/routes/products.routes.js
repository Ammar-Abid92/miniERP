const { authJwt } = require("../middleware");
const controller = require("../controllers/products.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/createproduct",
    controller.createProduct
  );
  app.post(
    "/api/uploadproduct",
    controller.uploadProduct
  );

};
