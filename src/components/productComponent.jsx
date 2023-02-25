import React from 'react';
import '../styles/props.css';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromDB,getmotorcycledetails, getmobilephonesdetails} from '../Redux/productSlice';
import { useNavigate } from 'react-router-dom';

const ProductComponent = () => {
    var products = [];
    var bikes = [];
    var mobiles = [];
    const navigate = useNavigate();
    products = useSelector(state=>state.productreducer.products);
    bikes = useSelector(state=>state.productreducer.bikes);
    mobiles = useSelector(state=>state.productreducer.mobiles);
    var allproducts = [...products,...bikes,...mobiles];
    console.log(products);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getproducts = async ()=>{
          await dispatch(getProductsFromDB());
          await dispatch(getmotorcycledetails());
          await dispatch(getmobilephonesdetails());
        }
        getproducts();
    },[])

    var renderitems = [];
    if(products)
    {
        renderitems = allproducts && allproducts.map((item) => {
            console.log(products);
            return (
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="cardArr">
                    <div className="card">
                    <button onClick={()=>navigate("/displayproduct",{state:item})}>
                    <img src={require(`D:/carsimages/${item.uploadphoto}`)} style={{"height":"200px"}}class="card-img-top" alt="uploadimage" />
                    </button>
                    <div className="card-body">
                        <h5 className="card-title">{item.setaprice}</h5>
                        <p className="card-text">{item.brand}-{item.kmdriven}</p>
                        <p className="card-text">{item.adtitle}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
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