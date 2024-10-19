import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './RoutingHeading/Homepage';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
