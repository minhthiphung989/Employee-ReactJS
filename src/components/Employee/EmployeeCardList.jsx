import React, {useState} from "react";
import { Row, Col} from 'antd';
import Employee from '../../data/Employee.json'
import '../Employee/EmployeeCardList.scss'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import ReactDeleteRow from 'react-delete-row';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
export default function EmployeeCardList(props){
    const header = Object.keys(Employee.employee[0]);
    const [searchTerm,setSearchTerm ] = useState("");
    
    const defaultProps = {
        options: Employee.employee,
        getOptionLabel: (employee) => employee.Department,
      };
      const defaultProps2 = {
        options: Employee.employee,
        getOptionLabel: (employee) => employee.Position,
      };
      
      const rowEvent = {
          onclick: (e,row) => {
              console.log(row)
          }
      }
      
    // const rowEvent = (e,row)=>{
    //     console.log(row);
    // }
    
    return <>
    
   <div className="EmployeeCard-Container">
   <Box sx={{ minWidth: 100 }} className="boxSearch">
    <FormControl >
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Name
        </Typography>
    <TextField 
      id="standard-basic" 
      label="Name" 
      variant="standard" 
      onChange={(e)=>{
          setSearchTerm(e.target.value)
    }}/>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 , paddingTop:'15px'}}>
        Department
        </Typography>
    <Autocomplete
      {...defaultProps}
      id="clear-on-escape"
      clearOnEscape
      renderInput={(params) => (
        <TextField {...params} label="Department" variant="standard" />
      )}
    />
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 , paddingTop:'15px'}}>
        Position
        </Typography>
      <Autocomplete
      {...defaultProps2}
      id="clear-on-escape"
      clearOnEscape
      renderInput={(params) => (
        <TextField {...params} label="Position" variant="standard" />
      )}
    />
    
    </FormControl>
   
  </Box> 
       
   
    <table>
        <thead>
            <tr>{header.map((key, index) =>(<th key={index}>{key.toUpperCase()}</th>) )}</tr>
        </thead>
      
        <tbody style={{textAlign:'center'}}>
            {Employee.employee.filter((val)=>{
                if(searchTerm===""){
                    return val;
                } else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((item, i) => (
                <ReactDeleteRow key={i} data={item} onDelete={ item => { return window.confirm(`Are you sure?`) }}>  
                    
                    <td><img src={item.Image} /></td> 
                    <td>{item.Name}</td>
                    <td>{item.Employee_ID}</td>
                    
                    <td>{item.Position}</td>
                    <td>{item.Department}</td>
                    <td>{item.Email}</td>
                    </ReactDeleteRow>
               
                       
            ))}        
        </tbody>
        
    </table>
   
   </div>
            
                            
          
    </>
    
}