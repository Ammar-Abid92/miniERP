module.exports = (sequelize, Sequelize) => {
    const PosTransaction = sequelize.define("pos_transaction", {


      payment_status: {
        type: Sequelize.STRING
      }
    });
  
    return PosOrder;
  };
  