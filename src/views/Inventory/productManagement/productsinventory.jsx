import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Importfromfile from "./excel_import/_importfromfile";
import "./productsinventory.css";
import { useState } from "react";


import {motion} from 'framer-motion'
import { createProductInDb, deleteProductFromDb } from "../../../db/product";
const Productsinventory = () => {
  const [id, setId] = useState();
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [costPrice, setCostPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState();
  const [quantity, setQuantity] = useState(0);
  
  const [delId, setDelId] = useState("");


  function onCreateProduct(e) {
    e.preventDefault()
    createProductInDb({id, barcode, name, costPrice, sellPrice, quantity}).then(res=>{
      alert(res.message)
    }
    );
  }
  function onDeleteProduct(e, delId){
    e.preventDefault()
    deleteProductFromDb({delId}).then(res=>{
      console.log(res.message)
      alert(res.message)
    }
    );

  }

  return (
    <div>
      <Form className="createproduct">
        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>product id</Form.Label>
          <Form.Control onChange={(e) => setId(e.target.value)} type="text" />
        </Form.Group>
        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>product barcode</Form.Label>
          <Form.Control
            onChange={(e) => setBarcode(e.target.value)}
            type="text"
          />
        </Form.Group>

        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>product name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="text" />
        </Form.Group>

        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>quantity</Form.Label>
          <Form.Control onChange={(e) => setQuantity(e.target.value)} />
        </Form.Group>

        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>cost price</Form.Label>
          <Form.Control onChange={(e) => setCostPrice(e.target.value)} />
        </Form.Group>

        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>selling price</Form.Label>
          <Form.Control onChange={(e) => setSellPrice(e.target.value)} />
        </Form.Group>

        <motion.button
        whileHover={{ scale:1.3 ,boxShadow: "10px 10px 0 gray"}}
          
          type="submit"
          style={{ width: "150px",
          height: "30px",
          marginTop:"40px" ,marginLeft:"120px",
          
          backgroundColor: "blue" }}
          onClick={(e)=>onCreateProduct(e)}
        >
          <p style={{color:"white"}}>CREATE PRODUCT</p>
          
        </motion.button>
      </Form>

      <Form className="deleteproduct">
        <Form.Group
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "100px",
          }}
        >
          <Form.Label>enter id of the product you want to delete</Form.Label>
          <Form.Control onChange={(e) => setDelId(e.target.value)} />

         <motion.button
         onClick={(e)=>onDeleteProduct(e, delId)}
        whileHover={{ scale:1.3 ,boxShadow: "10px 10px 0 gray"}}
          
          type="submit"
          style={{ width: "150px",
          height: "30px",
          marginTop:"40px" ,marginLeft:"120px",
          
          backgroundColor: "blue" }}
          
        >
          <p style={{color:"white"}}>DELETE PRODUCT</p>
           
           
          
        </motion.button>
        </Form.Group>
      </Form>
      <div className="importfrom">
        <Importfromfile />
      </div>
    </div>
  );
};
export default Productsinventory;
