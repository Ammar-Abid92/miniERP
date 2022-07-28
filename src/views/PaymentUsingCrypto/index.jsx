import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useSelector } from 'react-redux';
import pic from "./cryptoAccount.jpeg"
import './index.scss'

export default function PaymentUsingCrypto() {

    const [allCryptoCoins, setAllCryptoCoins] = React.useState([])
    const [coin, setCoin] = React.useState([]);
    const [myBool, setMyBool] = React.useState(false);


    React.useEffect(() => {
        getCryptoCoinsInPkr()
    }, [])

    const posOrder = useSelector((state) => state.pos_order.pos_order[0]);

    const currencyConverter = (selCoin, total) => {
        let converter = 1/selCoin * total
        return converter
        
    }

    const getCryptoCoinsInPkr = () => {
        axios.get("http://api.coinlayer.com/api/live?access_key=b58fbab21aab3d355dd286c561722d33&target=PKR").then(res => setAllCryptoCoins(Object.entries(res.data.rates)))
    }
    const handleSelect = (event) => {
        setCoin(event.target.value);
        setMyBool(true)
    };
    console.log("My Coin--->",coin, myBool)

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
                    <h1 className="l">Your payment bill of Rs. {posOrder.totalPrice} is converted into  {currencyConverter(coin[1], posOrder.totalPrice )} {coin[0]} </h1>
                    <br/>
                    <img className="f" src={pic} />
                    <br/>
                    <h2 className="k">Scan the QR code to pay your bill using your crypto coin</h2>
                </div>
            ):null
        }
        </>
    );
}
