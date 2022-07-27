import Button from 'react-bootstrap/Button';
import './stockreport.css'
import Stockreportdata from './stockreportdata'

const Stockreport = () => {



  return (
    <div>
      <div className="stockborder">
        <Button variant="secondary" size="lg" style={{ border: "2px solid purple" }}>
          GENERATE STOCK REPORT
        </Button>
        <Button variant="secondary" size="lg" style={{ border: "2px solid purple" }} >
          DOWNLOAD STOCK REPORT
        </Button>
      </div>

      <div className="reportsection">

      </div>

      <div className="stockpurchased">
        <h2 className="heading">TOTAL STOCK PURCHASED</h2>
        <Stockreportdata />
      </div>

      <div className="stocksold">
        <h2 className="heading">TOTAL STOCK SOLD</h2>
      </div>

      <div className="netstock">
        <h2 className="heading">NET STOCK</h2>
      </div>
    </div>

  );

};
export default Stockreport;