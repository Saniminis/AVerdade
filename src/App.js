import './App.css';
import Login from "./pages/Login/index.jsx"
import CadastroProdutos from "./pages/CadastroProdutos/index.jsx"
import ListaDeProdutos from "./pages/ListaDeProdutos/index.jsx"
import MainNavBar from './components/MainNavBar/index.jsx'
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/ListaDeProdutos" element={<ListaDeProdutos/>}/>
          <Route path="/CadastroProdutos" element={<CadastroProdutos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;