import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './printer.css'
const Printer = () => {
  return (
    <div className='printerForm' >

      <Form className="f1">
        <h1 style={{ textAlign: "center", color: "green" }}>PRINTER SETUP</h1>
        <div className='printer__inputs'>

        <Form.Group className="f2">
          <Form.Label>PRINTER NAME</Form.Label>
          <Form.Control type="text" />

        </Form.Group>

        <Form.Group className="f3">
          <Form.Label>PRINTER IP</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" >
          PRINT
        </Button>
        </div>
      </Form>

    </div>

  );

};
export default Printer;

