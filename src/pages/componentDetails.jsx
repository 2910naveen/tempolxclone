import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/props.css'

const ComponentDetails = () =>{

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    return(
            <div>
            {/* Header */}
            <header className="headernormal">
             <button className="fa-solid fa-arrow-left arrow" onClick={()=>navigate(-1)}></button>
             <p className="post">Product Details</p>
            </header>
           <div style={{"backgroundColor":"#e1e8e187"}}>
           <div className="row">
           <div className="col-2"></div>
           <div className="productimagebg col-8">
             <center><img src={require(`C:/Users/incedo2/Documents/carsimages/${location.state.uploadphoto}`)} className="productimage"></img></center>
           </div>
           <div className="col-2"></div>
           </div>
           <div className="row">
            <div className="col-2"></div>
            <div className="productdetailsblock1 col-6">
              <p className="productadtitle">{location.state.adtitle}</p>
              {location.state.fuel && <p className="cardetails"><i className="fa-solid fa-gas-pump"></i><span className="carsymbol">{location.state.fuel}</span></p>}
              {location.state.kmdriven && <p className="cardetails"><i className="fa-solid fa-gauge"></i><span className="carsymbol">{location.state.kmdriven}</span></p>}
              {location.state.transmission && <p className="cardetails"><i className="fa-solid fa-timeline"></i><span className="carsymbol">{location.state.transmission}</span></p>}
            </div>
            <div className="productdetailsblock1 col-2">
              <h2 style={{"color":"green","fontWeight":"bold"}}>Price</h2>
              <p className="productadtitle">{location.state.setaprice}</p>
            </div>
            <div className="col-2"></div>
           </div>
           <div className="row">
            <div className="col-2"></div>
            <div className="productdetailsblock1 col-6">
              <p className="productadtitle">Overview</p>
              <hr />
              {location.state.noofowners && <p className="cardetails"><i class="fa-sharp fa-solid fa-person-circle-exclamation"></i><span className="carsymbol">Owner:{location.state.noofowners}</span></p>}
              {location.state.state && <p className="cardetails"><i class="fa-sharp fa-solid fa-location-dot"></i><span className="carsymbol">{location.state.state},{location.state.city},{location.state.neighbourhood}</span></p>}
            </div>
            <div className="productdetailsblock1 col-2">
              <h5 style={{"color":"green","fontWeight":"bold","marginTop":"20px"}}>OwnerName&Contact</h5>
              <p className="contactdetails">{location.state.username} & {location.state.mobilenumber}</p>
            </div>
            <div className="col-2"></div>
           </div>
           <div className="row">
            <div className="col-2"></div>
            <div className="productdetailsblock1 col-8">
            <p className="productadtitle">Description</p>
              <hr />
            <p className="description">{location.state.description}</p>
            </div>
            <div className="col-2"></div>
           </div>
           </div>
           </div>)
};

export default ComponentDetails;