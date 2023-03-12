import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFromDB } from "../Redux/productSlice";
import { useNavigate } from "react-router-dom";
import '../styles/props.css';

export const DisplayCars = () =>{
    
    var cars = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    cars = useSelector(state=>state.productreducer.products);
    const renderCarList = cars && cars.map((car)=>{
        return (
            <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2" style={{"marginTop":"20px"}}>
                <div className="cardArr">
                <div className="card">
                <button onClick={()=>navigate("/displayproduct",{state:car})}>
                <img src={require(`../carsimages/${car.uploadphoto}`)} style={{"height":"200px"}}class="card-img-top" alt="uploadimage" />
                </button>
                <div className="card-body">
                    <h5 className="card-title">{car.setaprice}</h5>
                    <p className="card-text">{car.brand}-{car.kmdriven}</p>
                    <p className="card-text">{car.adtitle}</p>
                    <p className="postedAt">PostedOn:{car.createdAt}</p>
                </div>
                </div>
                </div>
            </div>)
    });

    return (<>
            <div className="row">
            {/* Header */}
            <header className="headernormal">
                 <button className="fa-solid fa-arrow-left arrow" onClick={()=>navigate(-1)}></button>
            </header>
            <p className="post">Cars</p>
            {renderCarList}
            </div>
            </>)
};

const RenderCars = () =>{
    return(<>
           <DisplayCars />
           </>)
};

export default RenderCars;