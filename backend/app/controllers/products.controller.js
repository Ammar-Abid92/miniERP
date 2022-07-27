const db = require("../models");
const Product = db.product;
const Inventory = db.inventory;


const Op = db.Sequelize.Op;


exports.createProduct = (req, res) => {
    console.log(req.body)
    Inventory.create({
        product_id: req.body.id || req.body.Id,
    }).then(result => {
        Product.create({
            id: result.product_id,
            barcode: req.body.barcode || req.body.Barcode,
            name: req.body.name || req.body.Name,
            cost_price: req.body.costPrice || req.body.CostPrice,
            sell_price: req.body.sellPrice || req.body.SellPrice,
            quantity: req.body.quantity,
            remaining_quantity: req.body.quantity,
            inventoryId: result.id
        }).then(() => {
            res.status(201).send({
                message: "Product added successfully",
                data: req.body,
            });
        }).catch(e => {
            res.send({
                message: "Error in creating product",
                data: req.body,
            });
            return
        })
    }).catch(e => {
        res.send({
            message: "Error in creating product",
            data: req.body,
        });
        return
    })
}
exports.uploadProduct = (req, res) => {
    req.body.forEach((x) => {

        const { id, barcode, name, cost_price, quantity, sell_price } = x;
        const { Id, Barcode, Name, Cost_price, Quantity, Sell_price } = x;

        Inventory.create({
            product_id: id || Id,
        }).then(result => {
            Product.create({
                id: result.product_id,
                barcode: barcode || Barcode,
                name: name || Name,
                cost_price: cost_price || Cost_price,
                sell_price: sell_price || Sell_price,
                quantity: quantity,
                remaining_quantity: quantity,
                inventoryId: result.id
            }).then(() => {
                res.send({
                    message: "Data added successfully",
                    data: req.body,
                });
            }).catch(e => {
                res.send({
                    message: "Error in uploading products",
                    data: req.body,
                });
                
            })
        }).catch(e => {
            res.send({
                message: "Error in uploading products",
                data: req.body,
            });
            
        })
    })
}
exports.getProducts = (req, res) => {
    Product.findAll()
        .then(data => {
            res.status(201).json({
                message: "Data got successfully",
                data: data,
            })
        }).catch(e => {
            res.send({
                message: "Error ",
                data: req.body,
            });
        })
}

exports.deleteProduct = async (req, res) => {
    console.log(req.body)
    const productRow = await Product.findOne({
        where: { id: req.body.delId },
    });
    const inventoryRow = await Inventory.findOne({
        where: { id: req.body.delId },
    });
    if (productRow && inventoryRow) {
        await productRow.destroy(); // deletes the row
        await inventoryRow.destroy(); // deletes the row

        res.status(200).json({
            message: "Product deleted successfully",
            data: row,
        })
    } else {
        res.json({ message: "No Product Found" })
    }

}
