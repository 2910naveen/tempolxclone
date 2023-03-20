import '../styles/props.css';
import {useState} from 'react';
import {postmotorcycledetails} from '../Redux/productSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/logo.css';

const MotorCycleRegister = () => {

    const navigate = useNavigate(-1);
    const dispatch = useDispatch();
    const [click,setClick] = useState();
    const [submitMsg,setSubmitMsg] = useState();
    const [submitted,setSubmitted] = useState();
    const [motorCyclePostDetails,setmotorCyclePostDetails] = useState({
                                                          brand:'',
                                                          year:'',
                                                          kmdriven:'',
                                                          setaprice:'',
                                                          adtitle:'',
                                                          description:'',
                                                          uploadphoto:'',
                                                          state:'',
                                                          city:'',
                                                          neighbourhood:'',
                                                          username:'',
                                                          mobilenumber:'',
                                                          email:''
                                                        }); 
    
    const handleChange = (e) =>{
        if(e.target.name === "uploadphoto")
        {
            console.log(e.target.name+e.target.files[0].name);
            let newMotorCyclePostDetails = {...motorCyclePostDetails};
            newMotorCyclePostDetails[e.target.name] = e.target.files[0].name;
            setmotorCyclePostDetails(newMotorCyclePostDetails);
        }
        else
        {
            console.log(e.target.name+" "+e.target.value);
            let newMotorCyclePostDetails = {...motorCyclePostDetails};
            newMotorCyclePostDetails[e.target.name] = e.target.value;
            setmotorCyclePostDetails(newMotorCyclePostDetails);
        }
    }
    
    const handleSubmit = async (e) =>{
       e.preventDefault();
       setClick(true);
       let nonfilledprop = Object.keys(motorCyclePostDetails).filter((prop)=>motorCyclePostDetails[prop] === '');
       if(nonfilledprop.length > 0)
       {
           setSubmitMsg(false);
           setSubmitted(false);
       }
       else
       {
           await dispatch(postmotorcycledetails(motorCyclePostDetails));
           setSubmitMsg(true);
           setSubmitted(true);
           clearForm();
       }
    };

    const clearForm = ()=>{
        setmotorCyclePostDetails({
            brand:'',
            year:'',
            kmdriven:'',
            setaprice:'',
            adtitle:'',
            description:'',
            uploadphoto:'',
            state:'',
            city:'',
            neighbourhood:'',
            username:'',
            mobilenumber:'',
            email:''
          })
    }

    return (<>
        {/* Header */}
        <header className="headernormal">
            <button className="fa-solid fa-arrow-left arrow" onClick={()=>navigate(-1)}></button>
            <img src={require('../logo/final-logo-greybg.jpg')} className="logo"></img>
        </header>
        {/* form */}
        <p className="post">POST YOUR AD</p>
        <div className='form-container'>
            <form>
                <div className="form-group container-fluid">
                    <p className="selectedCategory">SELECTED CATEGORY</p>
                    <p>Bikes/Motorcycles</p>
                    <hr />
                    <p className="includedetails">INCLUDE SOME DETAILS</p>
                    <input type="text" className="form-control" name="brand" id="brand" placeholder="Brand" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.brand} required />
                    { click && motorCyclePostDetails.brand === '' && !submitted ? <p className="displayemptymessage">Please enter the Brand Name</p> : ''}
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input type="text" className="form-control" name="year" id="year" placeholder="Year" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.year} required />
                            { click && motorCyclePostDetails.year === '' && !submitted ? <p className="displayemptymessage">Please enter the Year</p> : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input type="text" className="form-control" name="kmdriven" id="kmdriven" placeholder="KMDriven" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.kmdriven} required />
                            { click && motorCyclePostDetails.kmdriven === '' && !submitted ? <p className="displayemptymessage">Please enter the Brand Kmdriven</p>:''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text">Rs</div>
                            </div>
                            <input type="text" className="form-control" name="setaprice" id="setaprice" placeholder="Set a price in Rs" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.setaprice} required />
                            </div>
                            { click && motorCyclePostDetails.setaprice === '' && !submitted ? <p className="displayemptymessage">Please enter the price</p> : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="ad title">Ad Title*</label>
                            <textarea className="form-control" name="adtitle" id="adtitle" rows="2" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.adtitle} required></textarea>
                            { click && motorCyclePostDetails.city && !submitted === '' ? <p className="displayemptymessage" >Please enter the ad title</p> : ''}
                            <small id="emailHelp" class="form-text text-muted">mention the key features of of your item(eg:brand,model,age,type)</small>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="ad title">Description*</label>
                            <textarea className="form-control" name="description" id="description" rows="4" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.description}></textarea>
                            { click && motorCyclePostDetails.description === '' && !submitted ? <p className="displayemptymessage" >Please enter the description</p> : ''}
                            <small id="emailHelp" class="form-text text-muted">Include condition features and reason for selling</small>
                        </div>
                    </div>
                    <label htmlFor="uploadphoto">UploadImageOfCar*</label>
                    <input type="file" className="form-control" name="uploadphoto" id="uploadphoto" onChange={(e)=>handleChange(e)} required /><br />
                    <hr/>
                    <p className="includedetails">Confirm Your Location</p>
                    <input type="text" className="form-control" name="state" id="state" placeholder="State*" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.state} required />
                    {click && motorCyclePostDetails.state === '' && !submitted ? <p className="displayemptymessage" >Please enter the State Name</p>:''}
                    <input type="text" className="form-control" name="city" id="city" placeholder="city*" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.city} required />
                    { click && motorCyclePostDetails.city === '' && !submitted ?  <p className="displayemptymessage" >Please enter the city Name</p> : ''} 
                    <input type="text" className="form-control" name="neighbourhood" id="neighbourhood" placeholder="neighbourhood*" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.neighbourhood} required />
                    { click && motorCyclePostDetails.neighbourhood === '' && !submitted ? <p className="displayemptymessage" >Please enter the neighbourhood Name</p> : ''}
                    <hr/>
                    <p className="includedetails">Review Your Details</p>
                    <label htmlFor="username">Name*</label>
                    <input type="text" className="form-control" name="username" id="username" placeholder="name*" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.username} required />
                    { click && motorCyclePostDetails.username === '' && !submitted ? <p className="displayemptymessage" >Please enter the UserName</p> : ''}
                    <p>Lets Verify your Account We will send you a confirmation code by SMS on next steps</p>
                    <label htmlFor="username">Mobile Phone Number*</label>
                    <div className="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">+91</div>
                    </div>
                    <input type="text" className="form-control" name="mobilenumber" id="mobilenumber" placeholder="EnterMobileNumber" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.mobilenumber} required />
                    </div>
                    <input type="text" className="form-control" name="email" id="email" placeholder="EnterEmail" onChange={(e)=>handleChange(e)} value={motorCyclePostDetails.email} required />
                    { click && motorCyclePostDetails.mobilenumber === '' && !submitted ? <p className="displayemptymessage" >Please enter the Mobilenumber</p> : '' }
                </div>
                <center><button name="submit" className="btn btn-primary" id="submit" onClick={(e)=>handleSubmit(e)}>Post Now</button></center>
                { click ? submitMsg ? <p className="displayMsgsuccess">Bike detials registered successfully</p> : <p className="displayMsgerror">Please Enter All The Details</p> :''}
                {console.log(submitMsg)}
            </form>
        </div>
    </>)
};

export default MotorCycleRegister;