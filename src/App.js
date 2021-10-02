
import './App.scss';
import EmployeeCardList from './components/Employee/EmployeeCardList';
import Navbar from './components/Navbar/Navbar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FilterBar from './components/Filter/FilterBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FilterBar/>
      <EmployeeCardList/>
     
      
      <Fab color="primary" aria-label="add" className='fab'>
        <AddIcon />
      </Fab>  
    </div>
  );
}

export default App;
