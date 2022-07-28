import React from 'react'
// import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Stack, TextField } from "@mui/material";


function PaymentMethod() {
    const navigate = useNavigate();

  return (
    

<div 
      style={{width: "1150px",
        position: "absolute",
        top:"130px",
         height: "270px",
          left: "300px"}}
      >


        <Button
        sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "200px" }} variant="contained" color="info" size="small"  > CASH
        
        </Button>


        <Button 
        sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "400px" }} variant="contained" color="info" size="small" onClick={() => navigate("/posScreen/paymentMethod/payment")} > CREDIT
        </Button>


        <Button 
        sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "600px" }} variant="contained" color="info" size="small" onClick={() => navigate("/posScreen/paymentMethod/crypto")} >  CRYPTO COIN
        </Button>

      </div>


  )
}

export default PaymentMethod