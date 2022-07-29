const db = require("../models");
const Product = db.product;
const PosOrder = db.posOrder;


const Op = db.Sequelize.Op;


exports.createPosOrder = (req, res) => {
        req.body.orderLines[0].remaining_quantity
    PosOrder.create({
        order_lines: req.body.orderLines,
        total_amount: req.body.totalPrice,
        payment_method: req.body?.payment_method || "empty",
        amount_paid: req.body?.amount_paid || 0.0,
        amount_change: req.body.amount_change
    }).then((data) => {
        data.order_lines.forEach(each=>{
            let quant = each.remaining_quantity - each.quantity
            Product.update({
                remaining_quantity: quant
            },
            {
                where: { id: each.id}
            })
        })
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
exports.getPosOrder = (req, res) => {
    PosOrder.findAll()
        .then(data => {
            // data.forEach(each=>{
            //     let quant = each.order_lines[0].remaining_quantity - each.order_lines[0].quantity
            //     Product.update({
            //         remaining_quantity: quant
            //     },
            //     {
            //         where: { id: each.order_lines[0].id}
            //     })
            // })
           
                res.status(201).json({
                    message: "Data got successfully",
                    data: data,
                })
            
        }).catch(e => {
            res.send({
                message: "Error ",
                data: e.message,
            });
        })
}