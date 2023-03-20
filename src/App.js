import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/header';
import ProductListing from './components/productlisting';
import ChooseACategory from './pages/chooseacategory';
import CarRegister from './pages/carRegistration';
import Login from './components/Login';
import EnterOTP from './components/enterOTP';
import Register from './components/register';
import MotorCycleRegister from './pages/bikeRegistration';
import MobilePhoneRegister from './pages/mobilephoneRegistration'
import ComponentDetails from './pages/componentDetails';
import RenderCars from './pages/displayCars';
import RenderMobiles from './pages/displaymobilephones';
import RenderBikes from './pages/displaymotorcycles';
import { AuthContext } from './components/authContext';
import RequiredAuth from './components/requiredAuth';
import EmailToSeller from './pages/emailToSeller';
import Footer from './components/footer';


function App() {

  const loc = window.location.href;
  const arr = loc.split('/');
  const path = arr[arr.length-1];
  return (
    <div className="App">
     <AuthContext>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<ProductListing/>} />
         <Route path="/chooseacategory" element={<RequiredAuth><ChooseACategory/></RequiredAuth>} />
         <Route path="/carregister" element={<CarRegister/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/enterotp" element={<EnterOTP/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/motorcycleregister" element={<MotorCycleRegister />} />
         <Route path="/mobilephoneregister" element={<MobilePhoneRegister />} />
         <Route path="/displayproduct" element={<ComponentDetails />} />
         <Route path="/rendercars" element={<RenderCars />} />
         <Route path="/rendermobilephones" element={<RenderMobiles />} />
         <Route path="/rendermotorcycles" element={<RenderBikes />} />
         <Route path="/emailtoseller" element={<EmailToSeller/>} />
       </Routes>
       <Footer/>
     </BrowserRouter>
     </AuthContext>
    </div>
  );
}

export default App;
