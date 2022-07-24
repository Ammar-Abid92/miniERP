module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
      name: {
        type: Sequelize.STRING
      },
      barcode: {
        type: Sequelize.INTEGER
      },
      cost_price: {
        type: Sequelize.INTEGER,
      },
      sell_price:{
        type: Sequelize.INTEGER,
      },
      quantity:{
        type: Sequelize.INTEGER,
      },
      remaining_quantity:{
        type: Sequelize.INTEGER,
      }
    });
  
    return Product;
  };
  