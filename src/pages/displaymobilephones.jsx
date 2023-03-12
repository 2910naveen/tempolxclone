import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/props.css';

export const DisplayMobiles = () =>{
    
    var mobiles = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    mobiles = useSelector(state=>state.productreducer.mobiles);
    const renderMobileList = mobiles && mobiles.map((mobile)=>{
        return (
            <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2" style={{"marginTop":"20px"}}>
                <div className="cardArr">
                <div className="card">
                <button onClick={()=>navigate("/displayproduct",{state:mobile})}>
                <img src={require(`../carsimages/${mobile.uploadphoto}`)} style={{"height":"200px"}}class="card-img-top" alt="uploadimage" />
                </button>
                <div className="card-body">
                    <h5 className="card-title">{mobile.setaprice}</h5>
                    <p className="card-text">{mobile.brand}-{mobile.kmdriven}</p>
                    <p className="card-text">{mobile.adtitle}</p>
                    <p className="postedAt">PostedOn:{mobile.createdAt}</p>
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
            <p className="post">Mobiles</p>
            {renderMobileList}
            </div>
            </>)
};

const RenderMobiles = () =>{
    return(<>
           <DisplayMobiles />
           </>)
};

export default RenderMobiles;