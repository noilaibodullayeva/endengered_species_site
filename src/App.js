import './App.css';
import { Box } from '@mui/material';
import Header from './components/header/Header';
import Banner1 from './components/banner1/Banner1';
import Statistics from './components/Statistics/Statistics';
import Imagespart from './components/ImagesPart/ImagesPart';
import News from './components/news/News';
import Join from './components/Join/Join';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Box sx={{backgroundColor: '#fff', margin: '0 10px'}}>
      <Header/>
      <Banner1/>
      <Statistics/>
      <Imagespart/>
      <News/>
      <Join/>
      <Footer/>
    </Box>
  );
}

export default App;
