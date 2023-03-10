import React from 'react';
import '../styles/props.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{

    const navItems = [{id:0,productlabel:"MobilePhone"},
                      {id:1,productlabel:"Cars"},
                      {id:2,productlabel:"MotorCycles"},
                      {id:3,productlabel:"Houses"},
                      {id:4,productlabel:"TV-Video-Audio"},
                      {id:5,productlabel:"Tablets"},
                      {id:6,productlabel:"Land&Plots"}];

    const [toggleLocation,settoggleLocation] = useState(false);
    const [inputSelects,setInputSelects] = useState({
        location:'',product:''
    })

    const handleChange = (e)=>{
        let newinputSelects = {...inputSelects};
        newinputSelects[e.target.name] = e.target.value;
        setInputSelects(newinputSelects);
    }
    
    const setLocation = (locationname)=>{
        let newinputSelects = {...inputSelects};
        newinputSelects["location"] = locationname;
        setInputSelects(newinputSelects);
    }
 
    return(
        <>
         <div className="header fixed row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="location">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input name="location" type="text" placeholder="location" onChange={(e)=>handleChange(e)} value={inputSelects.location}></input>
                <button onClick={()=>settoggleLocation(!toggleLocation)}><i className="fa-solid fa-chevron-down"></i></button>
                {toggleLocation ?<ul style={{position:"absolute"}}>
                    <li onClick={(e)=>setLocation("india")}>india</li>
                    <li onClick={(e)=>setLocation("america")}>america</li>
                    <li onClick={(e)=>setLocation("canada")}>canada</li>
                    <li onClick={(e)=>setLocation("australia")}>australia</li>
                </ul>:''}
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 itemsearch">
                <input name="product" type="text" placeholder="Find Cars,Mobile Phones and more..." value={inputSelects.product} onChange={(e)=>handleChange(e)}></input>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-1">
                <Link to="/login">Login</Link>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-1">
                <Link to="/register">Register</Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-1">
                <div className="sell">
                <button><Link to="/chooseacategory"><i className="fa-solid fa-plus"></i>sell</Link></button>
                </div>
            </div>
         </div>  
         <div className="headernav fixed flex row">
           <div className="col-4">
           <button className="viewcategories">
            <h2 className="s14" style={{display:"inline"}}>ViewCategories</h2>
            <button className="arrow" style={{display:"inline-block"}}><i className="fa-solid fa-chevron-down"></i></button>
            </button>
            </div>
            <div className="col-8">
            {
            navItems.map((item,index)=>{
                return (<a href="/" key={item.id}>{item.productlabel}</a>)
            })
            }
            </div>
         </div>
         </>
    );
};

export default Header;