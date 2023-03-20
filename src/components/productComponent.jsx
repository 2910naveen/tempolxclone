import React from 'react';
import '../styles/props.css';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromDB,getmotorcycledetails, getmobilephonesdetails,sendinterestedmailtoseller} from '../Redux/productSlice';
import { useNavigate } from 'react-router-dom';
import { useCustomAuth } from './authContext';

const ProductComponent = (props) => {
    // var products = [];
    // var bikes = [];
    // var mobiles = [];
    const navigate = useNavigate();
    const {allProducts,reduxProducts,isLocation,isBrand,displayPopUpFunc} = props;
    // products = useSelector(state=>state.productreducer.products);
    // bikes = useSelector(state=>state.productreducer.bikes);
    // mobiles = useSelector(state=>state.productreducer.mobiles);
    // var allproducts = [...products,...bikes,...mobiles];
    const dispatch = useDispatch();
    const {user} = useCustomAuth();

    // useEffect(()=>{
    //     const getproducts = async ()=>{
    //       await dispatch(getProductsFromDB());
    //       await dispatch(getmotorcycledetails());
    //       await dispatch(getmobilephonesdetails());
    //     }
    //     getproducts();
    // },[])

    var renderitems = [];
        if(reduxProducts.length === 0 && isLocation === false && isBrand === false)
        {
            renderitems = allProducts && allProducts.map((item) => {
                return (
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="cardArr">
                        <div className="card">
                        <button onClick={()=>navigate("/displayproduct",{state:item})}>
                        <img src={require(`../carsimages/${item.uploadphoto}`)} style={{"height":"200px"}}class="card-img-top" alt="uploadimage" />
                        </button>
                        <div className="card-body">
                            <h5 className="card-title">₹{item.setaprice.lastIndexOf('₹') === 0 ? item.setaprice.substring(1) : item.setaprice}<span><button title="interested" style={{'marginLeft':'120px',"border":'1px solid black',"backgroundColor":"#f226491f","borderRadius":"5px"}} onClick={()=>displayPopUpFunc(item)}><i class="fa-solid fa-heart"></i></button></span></h5>
                            <p className="card-text">{item.brand}-{item.kmdriven}</p>
                            <p className="card-text">{item.adtitle}</p>
                            <p className="postedAt">PostedOn:{item.createdAt.substring(0,item.createdAt.lastIndexOf('T'))}</p>
                        </div>
                        </div>
                        </div>
                    </div>)
            });
        }
        else
        {
            console.log(reduxProducts);
            renderitems =  reduxProducts && reduxProducts.map((item) => {
                return (
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                        <div className="cardArr">
                        <div className="card">
                        <button onClick={()=>navigate("/displayproduct",{state:item})}>
                        <img src={require(`../carsimages/${item.uploadphoto}`)} style={{"height":"200px"}}class="card-img-top" alt="uploadimage" />
                        </button>
                        <div className="card-body">
                            <h5 className="card-title">₹{item.setaprice.lastIndexOf('₹') === 0 ? item.setaprice.substring(1) : item.setaprice}<span><button title="interested" style={{'marginLeft':'120px',"border":'1px solid black',"backgroundColor":"#f226491f","borderRadius":"5px"}} onClick={()=>displayPopUpFunc(item)}><i class="fa-solid fa-heart"></i></button></span></h5>
                            <p className="card-text">{item.brand}-{item.kmdriven}</p>
                            <p className="card-text">{item.adtitle}</p>
                            <p className="postedAt">PostedOn:{item.createdAt.substring(0,item.createdAt.lastIndexOf('T'))}</p>
                        </div>
                        </div>
                        </div>
                    </div>)
            });
        }
        
  

    return (<>
        <div className="row">
        {renderitems}
        </div>
    </>)
};

export default ProductComponent;