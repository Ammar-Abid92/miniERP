import { useState } from "react";
import { login } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import {motion} from 'framer-motion'
import './indexsg.css'
import { signIn } from "../../db/signin";
// import addUser from "../../Store/actions";

function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignin = () => {
    signIn({username, password}).then((res) => {
      console.log("AMAAAAAA====>",res.data.roles[0])
      if (res.data.roles[0] === "Admin" || res.data.roles[0] === "admin") {
        navigate("/managerSelector");

      } else {
        navigate("/posScreen");
      }
    });
  };

  return (
    <div>
      <div className="signin"> 
        <div className="column">
          
          <h1 className="r">SoftSol ERP </h1>
          <h1 style={{ marginTop: "-4%", marginLeft: "-3%" }}>
            Sign In Please...
          </h1>
          <h1 style={{ color: "white" }}>.</h1>

          <div className="inputs">
            <input
              style={{
                border: "2px solid black",
                backgroundColor: "whitesmoke",
              }}
              required
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Write username here"
            />
            <input
              style={{
                border: "2px solid black",
                backgroundColor: "whitesmoke",
              }}
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Write password here"
            />
          </div>
          <br />

          {/* <Button  onClick={onSignin} style={{backgroundColor:""}}>
              <p style={{width:"90px",height:"40px",position:"absolute",left:"740px",top:"406px",backgroundColor:"lightgray"}}><b>LOGIN</b> </p>
            </Button> */}
          <motion.button
          whileHover={{ scale: 1.2,boxShadow: "10px 10px 0 gray" }}
            onClick={onSignin}
            style={{
              width: "90px",
              height: "30px",
              position: "absolute",
              left: "755px",
              top: "516px",
              backgroundColor: "green",
            }}
          >
            <p style={{ fontsize: "700px", color: "white" }}>
              <b>LOGIN</b>
            </p>
          </motion.button>

          <img
            className="i"
            alt="Person's image"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ynarIx54Z2Vh5vjAx4LY53GB_wTE7ecXNg&usqp=CAU"
            }
          />
{/* 
          <img
            alt="Person's image"
            src={
              "data:image/png;base64,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"
            }
            style={{
              height: "220px",
              width: "410px",
              position: "absolute",
              top: "390px",
              left: "30px",
            }}
          /> */}

          <img
            className="i2"
            alt="Person's image"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3je_a2M3s_HgwFXJSk_lM8zE65ML7WjFVag&usqp=CAU"
            }
          />

          <h1 style={{ color: "white" }}>.</h1>
          <h1 style={{ color: "white" }}>.</h1>
          <h1 style={{ color: "white" }}>.</h1>
          {/* <p onClick={() => navigate("/register")} style={{fontsize:"90px",backgroundColor:"yellow"}}>
            {" "}
            New user? Register here{" "}
          </p> */}
          <motion.p whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/register")} className="p">
            <b>New user? Register here</b>
          </motion.p>
        </div>
      </div>
      </div>
   
  );
}

export default SignIn;
