import React from 'react'
// import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Stack, TextField } from "@mui/material";
import './index.scss'
import Navbar from "../../components/navbar/Navbar";


function PaymentMethod() {
    const navigate = useNavigate();

  return (

    <div>
    <Navbar
    heading="PAYMENT SCREEN"
    title={[
      { label: "Log Out", href: "/login" },
      { label: "Managing Screen", href: "/managerSelector" },
    ]}
  />
    <h1 className="p">SELECT PAYMENT MODE</h1>
    

<div 
      style={{width: "1150px",
        position: "absolute",
        top:"130px",
         height: "70px",
          left: "300px"}}
      >


        <Button
        sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "200px" }} variant="contained" color="info" size="small"         onClick={() => navigate("/posScreen/paymentMethod/cash")}
        > CASH
        
        </Button>


        <Button 
        sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "400px" }} variant="contained" color="info" size="small" onClick={() => navigate("/posScreen/paymentMethod/payment")} > CREDIT
        </Button>


        <Button 
        sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "600px" }} variant="contained" color="info" size="small" onClick={() => navigate("/posScreen/paymentMethod/crypto")} >  CRYPTO COIN
        </Button>

      </div>

      </div>


  )
}

export default PaymentMethod