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


function App() {

  const loc = window.location.href;
  const arr = loc.split('/');
  const path = arr[arr.length-1];
  return (
    <div className="App">
     <BrowserRouter>
       {(path === 'chooseacategory' || path === 'carregister')? '':<Header />}
       <Routes>
         <Route path="/" element={<ProductListing/>} />
         <Route path="/chooseacategory" element={<ChooseACategory/>} />
         <Route path="/carregister" element={<CarRegister/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/enterotp" element={<EnterOTP/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/motorcycleregister" element={<MotorCycleRegister />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
