import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../../src/components/searchBarWork/searchBar.css";
import { TextField } from "@mui/material";
import { getProducts } from "../../../../src/store/actions/product"
import './stockreportdata.css'

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { addItem } from "../../../store/actions/cart.js";


const Stockreportdata = () => {
  const dispatch = useDispatch();

  const allProduct = useSelector((state) => state.products);
  console.log(allProduct)
  const [suggestions, setSuggestions] = useState(allProduct?.productsData);
  const [productTitle, setProductTitle] = useState("");
  const [products, setProducts] = useState(allProduct?.productsData)

  console.log(suggestions)
  return (

    <div className="stockreportdata__container">


      {suggestions?.map((item, index) => (
        <div >
          <table style={{ width: "500px", marginLeft: "45px" }} id="toxls">
            <tr>
            </tr>
            <tr style={{ border: "1px solid black" }}>
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
  
      <div className="button">

<ReactHTMLTableToExcel
  id="test-table-xls-button"
  table="toxls"
  filename="alibhai"
  sheet="sheet1"
  buttonText="download report"
/>
  </div>
    </div>
  );
};


export default Stockreportdata;
