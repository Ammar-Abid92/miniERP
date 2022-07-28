module.exports = (sequelize, Sequelize) => {
  const PosOrder = sequelize.define("pos_order", {
    order_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true

    },
    order_lines: {
      type: Sequelize.JSON,
    },
    total_amount: {
      type: Sequelize.FLOAT
    },
    amount_paid: {
      type: Sequelize.FLOAT
    },
    amount_change: {
      type: Sequelize.FLOAT
    },
    payment_method:{
      type: Sequelize.STRING

    },

  });

  return PosOrder;
};
