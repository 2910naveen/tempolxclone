import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/props.css';

export const DisplayCars = () =>{
    
    var bikes = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    bikes = useSelector(state=>state.productreducer.bikes);
    const renderBikeList = bikes && bikes.map((bike)=>{
        return (
            <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2" style={{"marginTop":"20px"}}>
                <div className="cardArr">
                <div className="card">
                <button onClick={()=>navigate("/displayproduct",{state:bike})}>
                <img src={require(`../carsimages/${bike.uploadphoto}`)} style={{"height":"200px"}}class="card-img-top" alt="uploadimage" />
                </button>
                <div className="card-body">
                    <h5 className="card-title">{bike.setaprice}</h5>
                    <p className="card-text">{bike.brand}-{bike.kmdriven}</p>
                    <p className="card-text">{bike.adtitle}</p>
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
            <p className="post">MotorCycles</p>
            {renderBikeList}
            </div>
            </>)
};

const RenderBikes = () =>{
    return(<>
           <DisplayCars />
           </>)
};

export default RenderBikes;