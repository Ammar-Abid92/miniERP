import Button from 'react-bootstrap/Button';
import './stockreport.css'
import Stockreportdata from './stockreportdata'

const Stockreport = () => {
  return (
    <div className='stockreport__container'>
      <div className="stockpurchased">
        <h2 className="heading">CURRENT STOCK PURCHASED</h2>
        <Stockreportdata />
      </div>
    </div>

  );

};
export default Stockreport;