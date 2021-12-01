// import logo from './logo.svg';
import './App.css';

// Router
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/mainpage.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

