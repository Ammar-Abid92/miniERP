import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./searchBar.css";
import { Button, Typography , Stack, TextField} from "@mui/material";
import {getProducts} from "../../../src/store/actions/product"
import { addItem, increaseQty } from "../../store/actions/cart";

const SearchBar = () => {
  const dispatch = useDispatch();

  const allProduct = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart?.ord);

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

  const selectedProduct = (selectedProd) => {
    console.log(selectedProd)
    if (checkIfItemExistsInCart(selectedProd) < 1){
    dispatch(addItem(selectedProd))
    }else{
      dispatch(increaseQty(selectedProd.id))
    }
  };
  const checkIfItemExistsInCart = (y) => {
    const item = cart?.find((x) => x.id === y.id);
    if (item) return item.quantity;
    else return false;
  };

  const renderSuggestions = () => {
    if (suggestions?.length === 0) {
      return null;
    }
    return (
      <div style={{marginLeft:"-2px",display:'flex', flexDirection:'row', flexWrap:"wrap"}} >
        {suggestions?.map((item, index) => (
          <div  key={item.id}>
            <Button sx={{ width:"180px", margin:'6px', height:'100px'}}  variant="contained" color="info" size="small"  onClick={() => selectedProduct(item, item.quantity=1)}> {item.name} <br/> { ` (Price) ${item.sell_price}` }
            </Button>
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
export default SearchBar;
