import { useState } from "react";
import { register } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { signUp } from "../../db/signup";
import {motion} from 'framer-motion'

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState([]);

  const navigate = useNavigate();

  const onSignup = () => {
    if (ValidateEmail(email) === true && ValidateRole(role[0]) === true) {
      signUp({ username, email, password, role }).then((res) => {
        if (res === true) {
          navigate("/login");
        } else {
          alert("Error In SignUp");
        }
      });
    } else {
      alert("Invalid Data");
    }
  };
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setEmail(mail);
      return true;
    }
    return false;
  }
  function ValidateRole(x) {
    console.log(x)
    if (x === "admin" || x === "cashier" || x === "Admin" || x === "Cashier") {
      setRole([role]);
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <div className="signup">

      
          <h1 className="a">Sign Up Please.........</h1>
          </div>
          <div className="ch">
          
          <input
            style={{ position: "absolute", top: "281px" }}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Write username here"
          />
          <input
            style={{  position: "absolute", top: "331px"}}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write email here"
          />
          <input
          style={{  position: "absolute", top: "381px"}}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Write password here"
          />
          <input
          style={{  position: "absolute", top: "431px"}}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Manager Or Cashier"
          />
          </div>
        

          <br />
          

          

          <motion.button whileHover={{ scale:1.3 ,boxShadow: "10px 10px 0 gray"}}
            onClick={onSignup}
            style={{
              width: "90px",
              height: "40px",
              position: "absolute",
              left: "760px",
              top: "519px",
              backgroundColor: "green",
            }}
          >
            <p style={{ fontsize: "700px", color: "white" }}>
              <b>Register</b>
            </p>
          </motion.button>
          <motion.p whileHover={{ scale: 1.1 }}  onClick={() => navigate("/login")} className="d">
            <b>Already registered? Login here!</b>
          </motion.p>
        </div>
      
    
  );
}

export default Signup;
