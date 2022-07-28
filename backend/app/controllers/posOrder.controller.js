const db = require("../models");
const Product = db.product;
const PosOrder = db.posOrder;


const Op = db.Sequelize.Op;


exports.createPosOrder = (req, res) => {
    PosOrder.create({
        order_lines: req.body.orderLines,
        total_amount: req.body.totalPrice,
        payment_method: req.body?.payment_method || "empty",
        amount_paid: req.body?.amount_paid || 0.0,
        amount_change: req.body.amount_change
    }).then(() => {
        res.status(201).send({
            message: "Order created successfully",
            data: req.body,
        });
    }).catch(e => {
        res.send({
            message: "Error in creating order",
            data: req.body,
        });
        return
    })
}