var Sequelize = require('sequelize');


module.exports = (sequelize, Sequelize) => {
  const Inventory = sequelize.define("inventory", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: Sequelize.INTEGER,
      unique: true
    },

  });

  return Inventory;
};
