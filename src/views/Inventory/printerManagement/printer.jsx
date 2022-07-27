import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './printer.css'
 const Printer=()=>
 {
    return(
        <div>
            
<Form className="f1">
<h1 style={{textAlign:"center",color:"green"}}>PRINTER SETUP</h1>
<Form.Group className="f2">
        <Form.Label>PRINTER NAME</Form.Label>
        <Form.Control type="text"  />
        
      </Form.Group>

      <Form.Group className="f3">
        <Form.Label>PRINTER API</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      
      
        
     


      
      <Button variant="primary" type="submit" style={{marginTop:"50px",marginLeft:"700px"}}>
         PRINT
      </Button>
    </Form>

    

    

        </div>

    );

 };
 export default Printer;

