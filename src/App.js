import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
