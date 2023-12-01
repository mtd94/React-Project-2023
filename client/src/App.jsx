
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from '../src/context/authContext';

import Header from '../src/components/headers/Header'
import Home from '../src/components/home/Home';
import Search  from '../src/components/search/Search';
import Catalog from '../src/components/catalog/Catalog'
import CarDetails from './components/car-details/CarDetails';
import Create from '../src/components/car-create/Create'
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';
import NotFound from './components/not-found-404/NotFound';
import Edit from './components/car-edit/Edit';

function App() {
  return (
    <AuthProvider>
    <div id='container'>
    <Header/>

    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/search" element={<Search/>} />
    <Route path="/catalog" element={<Catalog/>} />
    <Route path="/create-car" element={<Create/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path='/logout' element={<Logout/>} />
    <Route path="*" element={<NotFound/>} />
    <Route path="/cars/:carId" element={<CarDetails />} />
   <Route path="/cars/:carId/edit" element={<Edit />} />
    

    </Routes>
    <Footer/>
    </div>
    </AuthProvider>

  )
}

export default App;
