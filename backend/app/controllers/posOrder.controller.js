const db = require("../models");
const Product = db.product;
const PosOrder = db.posOrder;


const Op = db.Sequelize.Op;


exports.createOrder = (req, res) => {
    console.log("PRODUCT--->", req.body)

}