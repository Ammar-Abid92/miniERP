module.exports = (sequelize, Sequelize) => {
  const PosOrder = sequelize.define("pos_order", {
    order_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    order_lines: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    order_total: {
      type: Sequelize.FLOAT
    }
  });

  return PosOrder;
};
