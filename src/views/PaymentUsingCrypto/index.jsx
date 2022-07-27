import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function PaymentUsingCrypto() {

    const [allCryptoCoins, setAllCryptoCoins] = React.useState([])
    const [coin, setCoin] = React.useState();

    React.useEffect(() => {
        getCryptoCoinsInPkr()
    }, [])

    // const orderData = useSelector(state=>console.log(state.pos_oder))

    const getCryptoCoinsInPkr = () => {
        axios.get("http://api.coinlayer.com/api/live?access_key=b58fbab21aab3d355dd286c561722d33&target=PKR").then(res => setAllCryptoCoins(Object.entries(res.data.rates)))
    }
    const handleSelect = (event) => {
        setCoin(event.target.value);
    };
    console.log("My Coin--->",coin)

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={coin}
                    label="Age"
                    onChange={handleSelect}
                >
                    {allCryptoCoins?.map((each) => (
                        <MenuItem value={each[1]}>{each[0]}</MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Box>
    );
}
