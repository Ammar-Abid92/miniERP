import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageSelector from "../views/ManagingScreen";
import POS from "../views/POS";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Inventory from "../views/Inventory";
import PaymentScreen from "../views/paymentScreen/paymentScreen";
import PaymentMethod from "../views/paymentMethod";
import PaymentUsingCrypto from "../views/PaymentUsingCrypto";
import PaymentUsingCash from "../views/paymentUsingCash";
const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/posScreen" element={<POS />} />
        <Route path="/managerSelector" element={<ManageSelector />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/posScreen/paymentMethod" element={<PaymentMethod />} />
        <Route path="/posScreen/paymentMethod/cash" element={<PaymentUsingCash />} />

        <Route path="/posScreen/paymentMethod/payment" element={<PaymentScreen />} />
        <Route path="/posScreen/paymentMethod/crypto" element={<PaymentUsingCrypto />} />

      </Routes>
    </BrowserRouter>
  );
};
export default Navigator;
