import { useState } from "react";
import { register } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { signUp } from "../../db/signup";

function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState([]);

  const navigate = useNavigate();

  const onSignup = () => {
    if (ValidateEmail(email) === true && ValidateRole(role) === true) {
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
        <div className="column">
          <h1 className="a">Sign Up Please...</h1>
          <input
            style={{ position: "absolute", top: "141px" }}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Write username here"
          />
          <input
            style={{ marginTop: "5px" }}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write email here"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Write password here"
          />
          <input
            onChange={(e) => setRole(e.target.value)}
            placeholder="Manager Or Cashier"
          />

          <br />

          {/* <img
            className="b"
            alt="Person's image"
            src={
              "https://clipart.com/thumbs.php?f=/697/batch_42/000697-0042-000446_tnb.png"
            }
          /> */}

          <button
            onClick={onSignup}
            style={{
              width: "90px",
              height: "40px",
              position: "absolute",
              left: "745px",
              top: "449px",
              backgroundColor: "green",
            }}
          >
            <p style={{ fontsize: "700px", color: "white" }}>
              <b>Register</b>
            </p>
          </button>
          <p onClick={() => navigate("/login")} className="d">
            <b>Already registered? Login here!</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
