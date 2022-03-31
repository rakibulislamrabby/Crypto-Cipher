import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Hompage/Homepage';
import Header from './component/Header/Header';
import Coins from './component/Coins/Coins';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import CoinDetails from './component/CoinDetails/CoinDetails';
import BdAddress from './component/Contact/BdAddress';
import UsAddress from './component/Contact/UsAddress';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
          <Route path='us-address' element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
