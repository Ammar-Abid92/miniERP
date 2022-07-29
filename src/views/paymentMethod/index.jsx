import React from 'react'
// import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Stack, TextField } from "@mui/material";
import './index.scss'
import Navbar from "../../components/navbar/Navbar";
import "../Inventory/index.scss"

function PaymentMethod() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        heading="PAYMENT SCREEN"
        title={[
          { label: "Log Out", href: "/login" },
          { label: "Managing Screen", href: "/managerSelector" },
        ]}
      />
       <div className="container__">
        <h1 style={{color:"white"}} >SELECT PAYMENT MODE</h1>

        <div
      className="container__buttons"
      >


          <Button
            sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black" }} variant="contained" color="info" size="small" onClick={() => navigate("/posScreen/paymentMethod/cash")}
          > CASH

          </Button>


          <Button
            sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black" }} variant="contained" color="info" size="small" onClick={() => navigate("/posScreen/paymentMethod/payment")} > CREDIT
          </Button>


          <Button
            sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black" }} variant="contained" color="info" size="small" onClick={() => navigate("/posScreen/paymentMethod/crypto")} >  CRYPTO COIN
          </Button>

        </div>

      </div>
    </>

  )
}

export default PaymentMethod