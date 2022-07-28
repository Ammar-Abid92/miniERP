import { Button, Typography, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./index.scss"
import Navbar from "../../components/navbar/Navbar";

const ManageSelector = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        heading="MANAGER SCREEN"
        title={[
          { label: "Log Out", href: "/login" },
          { label: "Managing Screen", href: "/managerSelector" },
        ]}
      />
      <h1 className="titlePortion">Hello Manager</h1>
      <div 
      style={{display: "flex",
      justifycontent: "center",
      flexdirection:"row"
        }}
      >


        <Button
        sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "35%",top:"30%" }} variant="contained" color="info" size="small"         onClick={() => navigate("/posScreen")}
        > POINT OF SALE
        
        </Button>


        <Button 
        sx={{ width: "180px", margin: '6px', height: '100px', border: "2px solid black", position: "absolute", left: "53%" ,top:"30%"}} variant="contained" color="info" size="small" onClick={() => navigate("/inventory")} > INVENTORY MANAGEMENT
        </Button>


        

      </div>
    </div>
    
    
  );
};
export default ManageSelector;
