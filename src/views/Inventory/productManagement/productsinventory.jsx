import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Importfromfile from "./excel_import/_importfromfile";
import "./productsinventory.css";
import { useState } from "react";
import { createProductInDb } from "../../../db/product";
const Productsinventory = () => {
  const [id, setId] = useState("");
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [costPrice, setCostPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState();
  const [quantity, setQuantity] = useState(0);

  function onCreateProduct() {
    createProductInDb(id, barcode, name, costPrice, sellPrice, quantity).then(
      (res) => {
        if (res === true) {
          alert("Product has been created");
        } else {
          alert("error in product creation");
        }
      }
    );
  }

  return (
    <div>
      <Form className="createproduct">
        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>product id</Form.Label>
          <Form.Control onChange={(e) => setId(e.target.value)} type="text" />
        </Form.Group>
        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>product barcode</Form.Label>
          <Form.Control
            onChange={(e) => setBarcode(e.target.value)}
            type="text"
          />
        </Form.Group>

        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>product name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="text" />
        </Form.Group>

        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>quantity</Form.Label>
          <Form.Control onChange={(e) => setQuantity(e.target.value)} />
        </Form.Group>

        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>cost price</Form.Label>
          <Form.Control onChange={(e) => setCostPrice(e.target.value)} />
        </Form.Group>

        <Form.Group style={{ marginLeft: "10px", marginRight: "10px" }}>
          <Form.Label>selling price</Form.Label>
          <Form.Control onChange={(e) => setSellPrice(e.target.value)} />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginTop: "50px", marginLeft: "130px" }}
          onClick={onCreateProduct}
        >
          CREATE PRODUCT
        </Button>
      </Form>

      <Form className="deleteproduct">
        <Form.Group
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "100px",
          }}
        >
          <Form.Label>enter id of the product you want to delete</Form.Label>
          <Form.Control />

          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "50px", marginLeft: "150px" }}
          >
            DELETE PRODUCT
          </Button>
        </Form.Group>
      </Form>
      <div className="importfrom">
        <Importfromfile />
      </div>
    </div>
  );
};
export default Productsinventory;
