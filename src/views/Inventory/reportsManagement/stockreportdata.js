import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../../src/components/searchBarWork/searchBar.css";
import { TextField } from "@mui/material";
import { getProducts } from "../../../../src/store/actions/product"
import './stockreportdata.css'

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { addItem } from "../../../store/actions/cart.js";
import { getPosOrdersFromDb } from "../../../db/posOrder";
import { getProductsFromDb } from "../../../db/product";


const Stockreportdata = () => {
  const [products, setProducts] = useState([])


  useEffect(async () => {
    let res = await getProductsFromDb()
    setProducts(res.data)
  }, [])

  console.log("AMMAAARRR---->", products)
  return (

    <div className="stockreportdata__container">
      <table style={{ width: "500px", marginLeft: "10px" }} >
        <tr style={{ border: "5px solid black" }}>
          <td className="rowcss" >ID</td>
          <td className="rowcss" >Barcode </td>
          <td className="rowcss" >Name</td>
          <td className="rowcss" >Cost Price</td>
          <td className="rowcss" >Sell Price</td>
          <td className="rowcss" >Quantity</td>
          <td className="rowcss" >Rem. qty</td>

        </tr>
      </table>
      {products?.map((item, index) => (
        <div >
          <table style={{ width: "500px", marginLeft: "10px" }} id="toxls">
            <tr>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td className="rowcss">{item.id}</td>
              <td className="rowcss">{item.barcode}</td>
              <td className="rowcss">{item.name}</td>
              <td className="rowcss">{item.cost_price}</td>
              <td className="rowcss">{item.sell_price}</td>
              <td className="rowcss">{item.quantity}</td>
              <td className="rowcss">{item.remaining_quantity}</td>
            </tr>

          </table>
        </div>

      ))}

      {/* <div className="button">

        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          table="toxls"
          filename="stock_report"
          sheet="sheet1"
          buttonText="download report"
        />
      </div> */}
    </div>
  );
};


export default Stockreportdata;
