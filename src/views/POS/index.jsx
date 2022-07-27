import OrderTable from "../../components/orderTableWork/orderTable";
import SearchBar from "../../components/searchBarWork/searchBar";
import Navbar from "../../components/navbar/Navbar";
import { Grid } from "@mui/material";
import {motion} from 'framer-motion'

import { useState } from "react";
const POS = () => {
  
  return (
    <div>

<motion.h1 
          animate={{ x: "10%" }}
          transition={{ duration: 4, loop: Infinity }} style={{position:"absolute",left:"670px",top:"13px",color:"green"}}>POINT OF SALE</motion.h1>
      <Navbar
        title={[
          { label: "Log Out", href: "/login" },
          { label: "Managing Screen", href: "/managerSelector" },
        ]}
      />
      <Grid container spacing={2}>
        <Grid item xs={6} md={4} >
         <SearchBar/>
    
        </Grid>
        <Grid item xs={6} md={8} >
          <OrderTable />
        </Grid>
      </Grid>
    
   </div>
   
    
  );

};
export default POS;
