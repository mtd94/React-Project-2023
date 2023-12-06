
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/context/authContext';

import Header from '../src/components/headers/Header'
import Home from '../src/components/home/Home';
import Catalog from '../src/components/catalog/Catalog'
import CarDetails from './components/car-details/CarDetails';
import Edit from './components/car-edit/Edit';
import Create from '../src/components/car-create/Create'
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';
import NotFound from './components/not-found-404/NotFound';
import AuthGuard from './components/guards/AuthGuard';


function App() {
  

  
  return (
    <AuthProvider>
    <div id='container'>
    <Header/>
    
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/catalog" element={<Catalog/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/catalog/:carId/details" element={<CarDetails />} />
    <Route path="*" element={<NotFound/>} />
    <Route element={<AuthGuard />}>
    <Route path='/logout' element={<Logout/>} />
    <Route path="/create-car" element={<Create/>} />
    <Route path="/:carId/edit" element={<Edit />} />
    </Route>
    
    

    </Routes>
    <Footer/>
    </div>
    </AuthProvider>

  )
}

export default App;
