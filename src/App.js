import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import NotFound from './Components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route eaxct path="/" element={<Home />} />
        <Route  path = "*" element={<NotFound />} />
          
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
