import React from 'react';
import '../styles/props.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/logo.css';

const ChooseACategory = () =>{


    const navigate = useNavigate();
    const [showitems,setshowitems] = useState({
                                                showcars:false,
                                                showmobiles:false,
                                                showbikes:false,
                                                showelectronics:false,
                                              })
    const handleshow = (e)=>{
        console.log("inside handle show");
        console.log(showitems.showbikes+" "+e.target.id);
       let newshowitems = {...showitems};
       newshowitems[e.target.id] = !showitems[e.target.id];
       setshowitems(newshowitems);
    }

    return(<>
           {/* Header */}
           <header className="headernormal">
           <button className="fa-solid fa-arrow-left arrow" onClick={()=>navigate(-1)}></button>
           <img src={require('../logo/final-logo-greybg.jpg')} className="logo"></img>
           </header>
           <body>
           <p className="post">POST YOUR AD</p>
           <div className="postadcard">
           <h4 className='postcac'>Choose a category</h4>
           <ul className="postcacul">
             <li className='postcacli'><button id="showcars" className="postcacbutton" onClick={(e)=>handleshow(e)}><i className="fa-solid fa-car postcacbuttonicon"></i>OLX Autos(Cars)<i class="fa-sharp fa-solid fa-chevron-right cars"></i></button></li>
             {showitems.showcars?<ul><li className='carregister'><Link to="/carregister">Cars</Link></li></ul>:''}
             <li className='postcacli'><button id="showmobiles" className="postcacbutton" onClick={(e)=>handleshow(e)}><i class="fa-sharp fa-solid fa-mobile postcacbuttonicon"></i>Mobiles<i class="fa-sharp fa-solid fa-chevron-right mobiles"></i></button></li>
             {showitems.showmobiles?<ul><li><Link to="/mobilephoneregister">MobilePhones</Link></li><li>Accessories</li><li>Tablets</li></ul>:''}
             <li className='postcacli'><button id="showbikes" className="postcacbutton" onClick={(e)=>handleshow(e)}><i class="fa-sharp fa-solid fa-motorcycle postcacbuttonicon"></i>Bikes<i class="fa-sharp fa-solid fa-chevron-right bikes"></i></button></li>
             {showitems.showbikes?<ul><li><Link to="/motorcycleregister">MotorCycles</Link></li><li>Scooties</li><li>Bicycles</li></ul>:''}
             <li className='postcacli'><button id="showelectronics" className="postcacbutton" onClick={(e)=>handleshow(e)}><i class="fa-solid fa-desktop postcacbuttonicon"></i>Electronics & Appliances<i class="fa-sharp fa-solid fa-chevron-right electronics"></i></button></li>
             {showitems.showelectronics?<ul><li>Computer&Laptops</li><li>Cameras&lenses</li><li>ACs</li></ul>:''}
             <li className='postcacli'><button className="postcacbutton"><i class="fa-solid fa-couch postcacbuttonicon"></i>Furniture<i class="fa-sharp fa-solid fa-chevron-right furniture"></i></button></li>
             <li className='postcacli'><button className="postcacbutton"><i class="fa-solid fa-bell-concierge postcacbuttonicon"></i>Services<i class="fa-sharp fa-solid fa-chevron-right services"></i></button></li>
           </ul>
           </div>
           </body>
           </>)
};

export default ChooseACategory;