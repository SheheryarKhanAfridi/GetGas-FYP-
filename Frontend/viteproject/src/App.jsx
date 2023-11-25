import React , {useState} from 'react';
import Nav from './Component/Navbar.jsx';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx'; 
import Contact from './Component/Contact.jsx'; 
import Login from './Component/Login.jsx'; 
import { Route, Routes } from 'react-router-dom';
import Register from './Component/Register.jsx';
//import Footer from './Component/Footer.jsx';
import Error from './Component/Error.jsx'
import Account from './Component/Account.jsx';
import Signout from './Component/Signout.jsx';
import Order from './Component/Order.jsx';
import Shop from './Component/Shop.jsx';
import VendorForm from './Component/VendorForm.jsx';
import VendorLogin from './Component/VendorLogin.jsx';
import VendorLoginPage from './Component/VendorLoginPage.jsx';
import VendorHome from './Component/VendorHome.jsx';
import NAV from './Component/NAV.jsx';
import ViewOrder from './Component/ViewOrder.jsx';

function App() {
  
  return (
    <div>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={< About/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Login' element={< Login/>}/>
    <Route path='/*' element={<Error />} />
    <Route path='/Account' element={<Account />} />
    <Route path='/signout' element={<Signout />} />
    <Route path='/Order' element={<Order />} />
    <Route path='/Shop' element={<Shop/>} />
    <Route path='/VendorForm' element={<VendorForm/>} />
    <Route path='/vendorlogin' element={<VendorLogin/>} />
    <Route path='/vendorLoginPAGE' element={<VendorLoginPage/>} />
    <Route path='/vendorhome' element={<VendorHome/>} />
    <Route path='/vieworder' element={<ViewOrder/>} />
  </Routes>
  {/* <Footer/> */}
    </div>
  );
}

export default App;
