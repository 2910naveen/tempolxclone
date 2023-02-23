import React from 'react';
import '../styles/props.css';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromDB } from '../Redux/productSlice';

const ProductComponent = () => {
    var products = [];
    products = useSelector(state=>state.productreducer.products);
    console.log(products);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getproducts = async ()=>{
          await dispatch(getProductsFromDB());
        }
        getproducts();
    },[])

    var renderitems = [];
    if(products)
    {
        renderitems = products && products.map((item) => {
            console.log(products);
            return (
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div className="cardArr">
                    <div className="card">
                    <img src={require(`C:/Users/gangavarapu.deep/olximages/${item.uploadphoto}`)} style={{"height":"200px"}}class="card-img-top" alt="uploadimage" />
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