import "./navbar.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = (props) => {
  const nameCopy = [];
  const navigate = useNavigate();

  // const productData = useSelector((state) => state.allDetails);

  return (
    <div className="nav__container">
      <header className="header">
        <div className="title">
          <Button variant="text" color="secondary" size="large" onC>
            SoftSol
          </Button>
        </div>

        <div className="typeEffect">
          <h1>{props.heading}</h1>
        </div>

        <ButtonGroup className="nav_buttons" size="small">
          <div className="buttons">
            {props.title.map((i) => {
              return (
                <Button variant="outlined" href={i.href} color="primary">
                  {i.label}
                </Button>
              );
            })}
          </div>
        </ButtonGroup>
      </header>
    </div>
  );
};
export default Navbar;
