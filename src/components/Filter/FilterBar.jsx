import React, { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { saveAs } from "file-saver";
import downFile from '../../data/MOCK_DATA.csv'
import Employee from '../../data/Employee.json'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
export default function FilterBar(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  
    return <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#33a095'}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <b>Employee</b> {Employee.employee.length} Employee
          </Typography>
          <IconButton >
            <FilterAltIcon/>
          </IconButton>
          
          <IconButton
        id="long-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        <MoreVertIcon/>
      </IconButton>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Select Colums</MenuItem>
        <MenuItem ><a href={downFile} download style={{color:'black', textDecoration:'none'}}> Download Employees</a></MenuItem>
        <MenuItem onClick={handleClose}>Import Employees</MenuItem>
        <MenuItem onClick={handleClose}>Delete Employees</MenuItem>
      </Menu>
  
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
}