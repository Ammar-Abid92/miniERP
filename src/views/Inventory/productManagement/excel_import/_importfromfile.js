import { useState } from 'react'
import { Data } from './data'
import * as XLSX from 'xlsx'
import './_importfromfile.css'
import { uploadProductsInDb } from '../../../../db/product';
import {motion} from 'framer-motion'

function Importfromfile() {

  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  // submit
  const [excelData, setExcelData] = useState(null);
  // it will contain array of objects

  // handle File
  const fileType = ['application/vnd.ms-excel'];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      // console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        }
      }
      else {
        setExcelFileError('Please select only .xls file types');
        setExcelFile(null);
      }
    }
    console.log('plz select your .xls file');
  }


  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      uploadProductsInDb(data).then(res=>{
        console.log(res.message)
        alert(res.message)
      }
      );
      setExcelData(data);
    }
    else {
      setExcelData(null);
    }
  }

  return (
  
    <div className="import__container">
      <h2>Upload Product</h2>
      <div className='form'>
        <form className='form-group' 
          onSubmit={handleSubmit}>
          <label><h5>Upload Excel file</h5></label>
          <br></br>
          <input type='file' className='form-control'
            onChange={handleFile} required></input>
          {excelFileError && <div className='text-danger'
            style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
          <motion.button className="btn-btn-success"
        whileHover={{ scale:1.3,boxShadow: "10px 10px 0 gray" }}
          
        type="submit"
        style={{ width: "150px",
        height: "30px",
        marginTop:"40px" ,marginLeft:"120px",
          
        backgroundColor: "blue" }}
        
        >
          <p style={{color:"white"}}>SUBMIT</p>
          
        </motion.button>
  
        </form>
      </div>

      <br></br>
      <hr></hr>

      {/* view file section */}
      <div className='viewer'>
        {excelData === null && <>No file selected</>}
        {excelData !== null && (
          <div className='table-responsive'>
            <h5>View Excel file</h5>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>id</th>
                  <th scope='col'>barcode</th>
                  <th scope='col'>name</th>
                  <th scope='col'>cost_price</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>sell_price</th>
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData} />
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
          
  );
}

export default Importfromfile;