import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../../src/components/searchBarWork/searchBar.css";
import { TextField} from "@mui/material";
import {getProducts} from "../../../../src/store/actions/product"
import './stockreportdata.css'

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { addItem } from "../../../store/actions/cart.js";

const Stockreportdata = () => {
  const dispatch = useDispatch();

  const allProduct = useSelector((state) => state.products);

  const [suggestions, setSuggestions] = useState(allProduct?.productsData);
  const [productTitle, setProductTitle] = useState("");
  const [products, setProducts] = useState(allProduct?.productsData)

  useEffect(()=>{
    dispatch(getProducts())
  }, []);


useEffect(() => {
  setProducts(allProduct?.productsData)
  setSuggestions(allProduct?.productsData)
},[allProduct])


  const onTextChanged = (e) => {
    let value = e.target.value;
    let suggestions = [];
    if (value.length >= 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestions = products.filter((v) => regex.test(v.name));
    }
    setSuggestions(suggestions);
    setProductTitle(value);
  };

  const SetOrderToStore = (item) => {
    dispatch(addItem(item)) 

  };

  const renderSuggestions = () => {
    if (suggestions?.length === 0) {
      return null;
    }
    return (
      
      <div style={{marginLeft:"-2px",display:'flex', flexDirection:'row', flexWrap:"wrap"}} >
      <ReactHTMLTableToExcel
      id="test-table-xls-button"
      className="download-table-xls-button"
      table="toxls"
      filename="alibhai"
      sheet="sheet1"
      buttonText="download report"
      
    />
     

        {suggestions?.map((item, index) => (
          <div >
            <table style={{width:"500px",marginLeft:"-45px"}} id="toxls">
  <tr>

          
  </tr>
  <tr style={{border:"1px solid black"}}>
    <td className="rowcss">{item.id}</td> 
    <td className="rowcss">{item.barcode}</td>
    <td className="rowcss">{item.name}</td>
    <td className="rowcss">{item.cost_price}</td>
    <td className="rowcss">{item.quantity}</td>
    <td className="rowcss">{item.sell_price}</td>
    
     

  </tr>
  
</table>






          </div>
         
        ))}
      </div>
    );
  };

  return (
 <div style={{
   padding:"20px",
   display:'flex',
   flexDirection:"column",
  //  justifyContent:"center",
   alignItems:"flex-start",   
   marginLeft:'28px'
  //  backgroundColor:'red'
 }}>

        <TextField
          value={productTitle}
          label="Search Products"
          defaultValue="Product"
          variant="outlined"
          size="large"
          color="primary"
          onChange={(e) => onTextChanged(e)}
          type="text"
          />
     
        {renderSuggestions()}
          </div>
        
 
  );
};
export default Stockreportdata;
