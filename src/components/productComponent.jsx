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
                var postedDateInfo = item.createdAt.substring(0,item.createdAt.lastIndexOf('T'));
                var currentDate = new Date().getDate();
                var currentMonth = new Date().getMonth();
                var currentYear = new Date().getYear();
                var postedDate = postedDateInfo.substring(8);
                var postedMonth = postedDateInfo.substring(5,7);
                var postedYear = postedDateInfo.substring(0,4);
                var displaytime;




                if(currentYear-postedYear > 0)
                {
                    displaytime = currentYear-postedYear + 'Years';
                    if(currentMonth-postedMonth > 0)
                    {
                        displaytime = displaytime+' '+currentMonth-postedMonth+'Months';
                        if(currentDate - postedDate > 0)
                        {
                            displaytime = displaytime + ' ' + currentDate-postedDate + 'Days';
                        }
                        else if(currentDate - postedDate < 0)
                        {
                            if(currentMonth == '1' || currentMonth == '2' || currentMonth == '4' || currentMonth == '6' || currentMonth == '8' || currentMonth == '9' || currentMonth == '11')
                            {
                                displaytime = displaytime.substring(0,displaytime.indexOf('Months')-1);
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = displaytime + ' '+currentMonth-postedMonth-1+'Months'+' '+31+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = displaytime +' '+31+currentDate-postedDate+'Days';
                                }
                            }
                            else if(currentMonth == 5 || currentMonth == 7 || currentMonth == 10 || currentMonth == 12)
                            {
                                displaytime = displaytime.substring(0,displaytime.indexOf('Months')-1);
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = displaytime + ' '+currentMonth-postedMonth-1+'Months'+' '+30+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = displaytime +' '+31+currentDate-postedDate+'Days';
                                }
                            }else if(currentMonth == 3)
                            {
                                displaytime = displaytime.substring(0,displaytime.indexOf('Months')-1);
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = displaytime + ' '+currentMonth-postedMonth-1+'Months'+' '+28+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = displaytime +' '+31+currentDate-postedDate+'Days';
                                }
                            }
                        }
                    }
                    else if(currentMonth-postedMonth < 0)
                    {
                        if(currentYear-postedYear-1 > 0)
                        {
                           displaytime = displaytime.substring(0,1) - 1 + displaytime.substring(1) +' '+(12+currentMonth-postedMonth) + 'Months';
                           if(currentDate - postedDate > 0)
                           {
                                displaytime = displaytime + ' ' + currentDate-postedDate + 'Days';
                           }
                           else if(currentDate - postedDate < 0)
                           {
                            if(currentMonth == '1' || currentMonth == '2' || currentMonth == '4' || currentMonth == '6' || currentMonth == '8' || currentMonth == '9' || currentMonth == '11')
                            {
                                displaytime = displaytime.substring(0,displaytime.indexOf('Months')-1);
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = displaytime + ' '+currentMonth-postedMonth-1+'Months'+' '+31+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = displaytime +' '+31+currentDate-postedDate+'Days';
                                }
                            }
                            else if(currentMonth == 5 || currentMonth == 7 || currentMonth == 10 || currentMonth == 12)
                            {
                                displaytime = displaytime.substring(0,displaytime.indexOf('Months')-1);
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = displaytime + ' '+currentMonth-postedMonth-1+'Months'+' '+30+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = displaytime +' '+31+currentDate-postedDate+'Days';
                                }
                            }else if(currentMonth == 3)
                            {
                                displaytime = displaytime.substring(0,displaytime.indexOf('Months')-1);
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = displaytime + ' '+currentMonth-postedMonth-1+'Months'+' '+28+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = displaytime +' '+31+currentDate-postedDate+'Days';
                                }
                            }
                           }

                        }
                        else if(currentYear-postedYear-1 == 0)
                        {
                            displaytime = (12+currentMonth-postedMonth) + 'Months';
                            if(currentDate - postedDate > 0)
                           {
                                displaytime = displaytime + ' ' + currentDate-postedDate + 'Days';
                           }
                           else if(currentDate - postedDate < 0)
                           {
                            if(currentMonth == '1' || currentMonth == '2' || currentMonth == '4' || currentMonth == '6' || currentMonth == '8' || currentMonth == '9' || currentMonth == '11')
                            {
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = currentMonth-postedMonth-1+'Months'+' '+31+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = 31+currentDate-postedDate+'Days';
                                }
                            }
                            else if(currentMonth == 5 || currentMonth == 7 || currentMonth == 10 || currentMonth == 12)
                            {
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = currentMonth-postedMonth-1+'Months'+' '+30+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = 31+currentDate-postedDate+'Days';
                                }
                            }else if(currentMonth == 3)
                            {
                                displaytime = displaytime.substring(0,displaytime.indexOf('Months')-1);
                                if(currentMonth-postedMonth-1 > 0)
                                {
                                    displaytime = displaytime + ' '+currentMonth-postedMonth-1+'Months'+' '+28+currentDate-postedDate+'Days';
                                }
                                else if(currentMonth-postedMonth-1 == 0)
                                {
                                    displaytime = displaytime +' '+31+currentDate-postedDate+'Days';
                                }
                            }
                        }
                        

                    }
                   
                }
            }
            else if(currentYear - postedYear == 0)
            {
                if(currentMonth-postedMonth>0)
                {
                    displaytime = currentMonth-postedMonth+'Months';
                    if(currentDate-postedDate>0)
                    {
                        displaytime = displaytime+' '+currentDate-postedDate+'days';
                    }
                    else if(currentDate-postedDate<0)
                    {
                        if(currentMonth-postedMonth-1>0)
                        {
                            if(currentMonth == '1' || currentMonth == '2' || currentMonth == '4' || currentMonth == '6' || currentMonth == '8' || currentMonth == '9' || currentMonth == '11')
                        {
                            if(currentMonth-postedMonth-1 > 0)
                            {
                                displaytime = currentMonth-postedMonth-1+'Months'+' '+31+currentDate-postedDate+'Days';
                            }
                            else if(currentMonth-postedMonth-1 == 0)
                            {
                                displaytime = 31+currentDate-postedDate+'Days';
                                if(displaytime/7 != 0 && displaytime%7 != 0)
                                {
                                    displaytime = displaytime/7+'weeks'+' '+displaytime%7+'days';
                                }
                                else if(displaytime/7 != 0 && displaytime%7 == 0)
                                {
                                    displaytime = displaytime/7+'weeks';
                                }
                                else if(displaytime/7 == 0 && displaytime != 0)
                                {
                                    displaytime = displaytime%7+'Days';
                                }
                            }
                        }
                        else if(currentMonth == 5 || currentMonth == 7 || currentMonth == 10 || currentMonth == 12)
                        {
                            if(currentMonth-postedMonth-1 > 0)
                            {
                                displaytime = currentMonth-postedMonth-1+'Months'+' '+30+currentDate-postedDate+'Days';
                            }
                            else if(currentMonth-postedMonth-1 == 0)
                            {
                                displaytime = 30+currentDate-postedDate+'Days';
                                if(displaytime/7 != 0 && displaytime%7 != 0)
                                {
                                    displaytime = displaytime/7+'weeks'+' '+displaytime%7+'days';
                                }
                                else if(displaytime/7 != 0 && displaytime%7 == 0)
                                {
                                    displaytime = displaytime/7+'weeks';
                                }
                                else if(displaytime/7 == 0 && displaytime != 0)
                                {
                                    displaytime = displaytime%7+'Days';
                                }
                            }
                        }else if(currentMonth == 3)
                        {
                            if(currentMonth-postedMonth-1 > 0)
                            {
                                displaytime = currentMonth-postedMonth-1+'Months'+' '+28+currentDate-postedDate+'Days';
                            }
                            else if(currentMonth-postedMonth-1 == 0)
                            {
                                displaytime = 28+currentDate-postedDate+'Days';
                                if(displaytime/7 != 0 && displaytime%7 != 0)
                                {
                                    displaytime = displaytime/7+'weeks'+' '+displaytime%7+'days';
                                }
                                else if(displaytime/7 != 0 && displaytime%7 == 0)
                                {
                                    displaytime = displaytime/7+'weeks';
                                }
                                else if(displaytime/7 == 0 && displaytime != 0)
                                {
                                    displaytime = displaytime%7+'Days';
                                }
                                
                            }
                        }
                        }
                    }
                }
                else if(currentMonth-postedMonth == 0)
                {
                    if(displaytime/7 != 0 && displaytime%7 != 0)
                    {
                        displaytime = displaytime/7+'weeks'+' '+displaytime%7+'days';
                    }
                    else if(displaytime/7 != 0 && displaytime%7 == 0)
                    {
                        displaytime = displaytime/7+'weeks';
                    }
                    else if(displaytime/7 == 0 && displaytime != 0)
                    {
                        displaytime = displaytime%7+'Days';
                    }
                }
            }
                
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
                            <p className="postedAt">Posted:{displaytime}ago</p>
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
                            <p className="postedAt">Posted:{item.createdAt.substring(0,item.createdAt.lastIndexOf('T'))}</p>
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