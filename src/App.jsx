import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './RoutingHeading/Homepage';
import './App.css';
import Header from './RoutingHeading/Header'
import ProductListing from './RoutingHeading/LivingRoom';
import Footer from './RoutingHeading/Footer'
function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/livingroom' element={<ProductListing/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
