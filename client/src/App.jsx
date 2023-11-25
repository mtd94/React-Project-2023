
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/headers/Header'
import Home from '../src/components/home/Home';
import Search  from '../src/components/search/Search';
import Catalog from '../src/components/catalog/Catalog'
import Create from '../src/components/car-create/Create'
import Register from './components/register/Register';
import Login from './components/login/Login';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div id='container'>
    <Header/>

    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/search" element={<Search/>} />
    <Route path="/catalog" element={<Catalog/>} />
    <Route path="/create-car" element={<Create/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
   
    

    </Routes>
    <Footer/>
    </div>
  )
}

export default App;
