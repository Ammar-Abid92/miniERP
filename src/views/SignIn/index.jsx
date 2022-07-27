import { useState } from "react";
import { login } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import "./index.css";
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
          {/* <img
            className="i3"
            alt="Person's image"
            src={
              "data:image/jpeg;base64,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"
            }
          /> */}
          <h1 className="r">SoftSol ERP </h1>
          <h1 style={{ marginTop: "-4%", marginLeft: "-3%" }}>
            Sign In Please...
          </h1>
          <h1 style={{ color: "lightblue" }}>.</h1>

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
          <button
            onClick={onSignin}
            style={{
              width: "90px",
              height: "30px",
              position: "absolute",
              left: "755px",
              top: "576px",
              backgroundColor: "green",
            }}
          >
            <p style={{ fontsize: "700px", color: "white" }}>
              <b>LOGIN</b>
            </p>
          </button>

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

          <h1 style={{ color: "lightblue" }}>.</h1>
          <h1 style={{ color: "lightblue" }}>.</h1>
          <h1 style={{ color: "lightblue" }}>.</h1>
          {/* <p onClick={() => navigate("/register")} style={{fontsize:"90px",backgroundColor:"yellow"}}>
            {" "}
            New user? Register here{" "}
          </p> */}
          <p onClick={() => navigate("/register")} className="p">
            <b>New user? Register here</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
