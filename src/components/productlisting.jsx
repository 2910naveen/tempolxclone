import React from 'react';
import ProductComponent from './productComponent';
import '../styles/props.css';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { getProductsFromDB,getmotorcycledetails, getmobilephonesdetails} from '../Redux/productSlice';


const ProductListing = () => {

    const navItems = [{id:0,productlabel:"MobilePhones",path:'/rendermobilephones'},
                      {id:1,productlabel:"Cars",path:'/rendercars'},
                      {id:2,productlabel:"MotorCycles",path:'/rendermotorcycles'},
                      ];
    const [reduxProducts,setReduxProducts] = useState([]);
    const dispatch = useDispatch();

    var cars = useSelector(state=>state.productreducer.products);
    var bikes = useSelector(state=>state.productreducer.bikes);
    var mobiles = useSelector(state=>state.productreducer.mobiles);
    var allproducts = [...cars,...bikes,...mobiles];
 
    useEffect(()=>{
        const getproducts = async ()=>{
        await dispatch(getProductsFromDB());
        await dispatch(getmotorcycledetails());
        await dispatch(getmobilephonesdetails());
        }
        getproducts();
    },[]);

    const [toggleLocation,settoggleLocation] = useState(false);
    const [inputSelects,setInputSelects] = useState({
        location:'',product:''
    })

    const handleChange = (e)=>{
        console.log(e.target.value.toUpperCase());
        let newinputSelects = {...inputSelects};
        newinputSelects[e.target.name] = e.target.value;
        setInputSelects(newinputSelects);
    }
    
    const setLocation = (locationname)=>{
        let newinputSelects = {...inputSelects};
        newinputSelects["location"] = locationname;
        setInputSelects(newinputSelects);
        console.log(allproducts);
        allproducts = allproducts.filter((product)=>product.state === locationname);
        setReduxProducts(allproducts);
        console.log(allproducts);
    }

    const searchProduct = (brand)=>{

        console.log(brand);
        allproducts = allproducts.filter((product)=>product.brand.toUpperCase().trim() === brand.toUpperCase());
        setReduxProducts(allproducts);
    }

    return (<>
        {/* Header Component */}
        <div className="header fixed row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="location">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input name="location" type="text" placeholder="location" onChange={(e) => handleChange(e)} value={inputSelects.location}></input>
                    <button onClick={() => settoggleLocation(!toggleLocation)}><i className="fa-solid fa-chevron-down"></i></button>
                    {toggleLocation ? <ul style={{ position: "absolute" }}>
                        <li onClick={(e) => setLocation("Maharastra")}>Maharastra</li>
                        <li onClick={(e) => setLocation("Tamilnadu")}>Tamilnadu</li>
                        <li onClick={(e) => setLocation("Karnataka")}>Karnataka</li>
                        <li onClick={(e) => setLocation("AndhraPradesh")}>AndhraPradesh</li>
                    </ul> : ''}
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 itemsearch">
                <input name="product" type="text" placeholder="Find Cars,Mobile Phones and more..." value={inputSelects.product} onChange={(e) => handleChange(e)}></input>
                <button onClick={()=>searchProduct(inputSelects.product)}><i className="fa-solid fa-magnifying-glass"></i></button>
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
                    <h2 className="s14" style={{ display: "inline" }}>ViewCategories</h2>
                    <button className="arrow" style={{ display: "inline-block" }}><i className="fa-solid fa-chevron-down"></i></button>
                </button>
            </div>
            <div className="col-8">
                {
                    navItems.map((item, index) => {
                        return (<Link to={`${item.path}`} key={item.id} style={{"margin":"0px 30px","textDecoration":"none","fontWeight":"bold","fontSize":"18px"}}>{item.productlabel}</Link>)
                    })
                }
            </div>
        </div>
        <div className="listingdisplay">
            <ProductComponent allProducts={allproducts} reduxProducts={reduxProducts}/>
        </div>
    </>)
};

export default ProductListing;