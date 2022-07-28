import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import pic from "./cryptoAccount.jpeg"
import { motion } from 'framer-motion'
import { createPosOrderInDb } from '../../db/posOrder';
import { useNavigate } from 'react-router-dom';

export default function PaymentUsingCrypto() {

    const [allCryptoCoins, setAllCryptoCoins] = React.useState([])
    const [coin, setCoin] = React.useState([]);
    const [myBool, setMyBool] = React.useState(false);
    const [convertedVal, setConvertedVal] = React.useState();
    const navigate = useNavigate()
    const dispatch = useDispatch();


    React.useEffect(() => {
        getCryptoCoinsInPkr()
    }, [])

    const posOrder = useSelector((state) => state.pos_order.pos_order[0]);

    const currencyConverter = (selCoin, total) => {
        let converter = 1/selCoin * total
        // setConvertedVal(converter)
        return converter
        
    }

    const getCryptoCoinsInPkr = () => {
        axios.get("http://api.coinlayer.com/api/live?access_key=c487c651c658079cb5d4bbc5d5dbc54b&target=PKR").then(res => setAllCryptoCoins(Object.entries(res.data.rates)))
    }
    const handleSelect = (event) => {
        event.preventDefault()
        console.log(event.target.value, "KKKKKKKKK")
        setCoin(event.target.value);
        setMyBool(true)
    };
    console.log("My Coin--->",coin, myBool)

    function checkout(e) {

            e.preventDefault()
            posOrder.amount_change = 0.0
            posOrder.payment_method = coin[0]
            posOrder.amount_paid = currencyConverter(coin[1], posOrder.totalPrice )
            console.log("MY POS ORDER ---->", posOrder)
            createPosOrderInDb(posOrder).then(res=>console.log("lalalala---->",res)).catch(e=>alert(e.message))
            alert("Thankyou for shopping")
            dispatch({
                type: "CLEAR_CACHE"
            })
            navigate("/posScreen")
        
    }

    return (
        <>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Coins</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={coin}
                    label="Age"
                    onChange={(e)=>handleSelect(e)}
                >
                    {allCryptoCoins?.map((each) => (
                        <MenuItem value={each}>{each[0]}</MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Box>
        {
            myBool ? (
                <div>
                    <h1>Your payment bill of Rs. {posOrder.totalPrice} is converted into  {currencyConverter(coin[1], posOrder.totalPrice )} {coin[0]} </h1>
                    <br/>
                    <img src={pic} />
                    <br/>
                    <h2>Scan the QR code to pay your bill using your crypto coin</h2>
                    <div>
                    <motion.button
                    whileHover={{ scale: 1.3, boxShadow: "10px 10px 0 gray" }}

                    type="submit"
                    style={{
                        width: "150px",
                        height: "30px",
                        marginTop: "40px", marginLeft: "120px",

                        backgroundColor: "blue"
                    }}
                    onClick={(e) => checkout(e)}
                >
                    <p style={{ color: "white" }}>Paid ? </p>

                </motion.button>
                    </div>
                </div>
            ):null
        }
        </>
    );
}
