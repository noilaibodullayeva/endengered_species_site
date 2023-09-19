import './App.css';
import { Box } from '@mui/material';
import Header from './components/header/Header';
import Banner1 from './components/banner1/Banner1';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <Box sx={{backgroundColor: '#fff', margin: 0}}>
      <Header/>
      <Banner1/>
      <Statistics/>
    </Box>
  );
}

export default App;
