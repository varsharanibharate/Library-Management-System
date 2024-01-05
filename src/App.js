import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Books from './Components/Books';
import OpeningHours from './Components/OpeningHours';
import MyPage from './Components/MyPage';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route eaxct path="/signup" element={<RegisterForm />} />
        <Route exact path="/"   element={<LoginForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/openingHours" element={<OpeningHours />} />
        <Route exact path="/myPage" element={<MyPage />} />
       <Route  path = "*" element={<NotFound />} />      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
