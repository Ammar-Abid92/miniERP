import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import './index.scss'


import { motion } from 'framer-motion'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPosOrderInDb } from "../../db/posOrder";


export default function PaymentUsingCash() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [amountPaid, setAmountPaid] = useState("");
    const [change, setChange] = useState(0);


    const posOrder = useSelector(state => state.pos_order.pos_order[0])
    function checkout(e) {
        if (amountPaid >= posOrder.totalPrice) {
            e.preventDefault()
            posOrder.amount_change = change
            posOrder.payment_method = "CASH"
            posOrder.amount_paid = amountPaid
            console.log("MY POS ORDER ---->", posOrder)

            createPosOrderInDb(posOrder).then(res=>console.log("lalalala---->",res)).catch(e=>alert(e.message))
            alert("Thankyou for shopping")
            dispatch({
                type: "CLEAR_CACHE"
            })
            navigate("/posScreen")
        } else {
            e.preventDefault()
            alert("please pay the bill properly")
        }
    }
    const calculateChange = (val) => {
        setAmountPaid(val)
        let changeVal = val - posOrder.totalPrice
        setChange(changeVal)
    }

    return (
        <>
            <Form className="createproduct">
                <h2>Bill Receipt</h2>
                <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <Form.Label>Bill Amount: </Form.Label>
                    <Form.Control
                        value={posOrder.totalPrice}
                        type="text"
                    />
                </Form.Group>
                <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <Form.Label>Item Details</Form.Label>
                    {posOrder.orderLines.map((x) => {
                        return (
                            <Form.Control
                                value={x.name + "               " + x.quantity + "              " + x.quantity * x.sell_price}
                                type="text"
                            />
                        )
                    })}

                </Form.Group>

                <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <Form.Label>Amount Paid</Form.Label>
                    <Form.Control onChange={(e) => calculateChange(e.target.value)} type="number" />
                </Form.Group>

                <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <Form.Label>Change</Form.Label>
                    <Form.Control value={change} />
                </Form.Group>

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
                    <p style={{ color: "white" }}>Pay</p>

                </motion.button>
            </Form>

        </>
    );
}
