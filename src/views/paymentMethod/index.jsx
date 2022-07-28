import React from 'react'
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";


function PaymentMethod() {
    const navigate = useNavigate();

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => navigate("/posScreen/paymentMethod/cash")}
      >
        Cash
      </Button>
    <br/>
      <Button
        color="primary"
        variant="contained"
        onClick={() => navigate("/posScreen/paymentMethod/payment")}
      >
        Credit
      </Button>
      <br/>

      <Button
        color="primary"
        variant="contained"
        onClick={() => navigate("/posScreen/paymentMethod/crypto")}
      >
        Crypto Coin
      </Button>
    </div>
  )
}

export default PaymentMethod