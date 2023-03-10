import '../styles/props.css';
import {useState} from 'react';
import { postcardetails } from '../Redux/productSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CarRegister = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [click,setClick] = useState();
    const [submitMsg,setSubmitMsg] = useState();
    const [submitted,setSubmitted] = useState();
    const [carPostDetails,setCarPostDetails] = useState({
                                                          brand:'',
                                                          year:'',
                                                          fuel:'',
                                                          transmission:'',
                                                          kmdriven:'',
                                                          noofowners:'',
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
            let newCarPostDetails = {...carPostDetails};
            newCarPostDetails[e.target.name] = e.target.files[0].name;
            setCarPostDetails(newCarPostDetails);
        }
        else
        {
            console.log(e.target.name+" "+e.target.value);
            let newCarPostDetails = {...carPostDetails};
            newCarPostDetails[e.target.name] = e.target.value;
            setCarPostDetails(newCarPostDetails);
        }
    }
    
    const handleSubmit = async (e) =>{
       e.preventDefault();
       setClick(true);
       let nonfilledprop = Object.keys(carPostDetails).filter((prop)=>carPostDetails[prop] === '');
       console.log(nonfilledprop);
       if(nonfilledprop.length > 0)
       {
           setSubmitMsg(false);
           setSubmitted(false);
       }
       else
       {
           await dispatch(postcardetails(carPostDetails));
           setSubmitMsg(true);
           setSubmitted(true);
           clearForm();
       }
    };

    const clearForm = ()=>{
        setCarPostDetails({
            brand:'',
            year:'',
            fuel:'',
            transmission:'',
            kmdriven:'',
            noofowners:'',
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
    }

    return (<>
        {/* Header */}
        <header className="headernormal">
            <button className="fa-solid fa-arrow-left arrow" onClick={()=>navigate(-1)}></button>
        </header>
        {/* form */}
        <p className="post">POST YOUR AD</p>
        <div className='form-container'>
            <form>
                <div className="form-group container-fluid">
                    <p className="selectedCategory">SELECTED CATEGORY</p>
                    <p>OLX Autos(cars)/cars</p>
                    <hr />
                    <p className="includedetails">INCLUDE SOME DETAILS</p>
                    <input type="text" className="form-control" name="brand" id="brand" placeholder="Brand" onChange={(e)=>handleChange(e)} value={carPostDetails.brand} required />
                    { click && carPostDetails.brand === '' && !submitted ? <p className="displayemptymessage">Please enter the Brand Name</p> : ''}
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input type="text" className="form-control" name="year" id="year" placeholder="Year" onChange={(e)=>handleChange(e)} value={carPostDetails.year} required />
                            { click && carPostDetails.year === '' && !submitted ? <p className="displayemptymessage">Please enter the Year</p> : ''}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <select name="fuel" id="fuel" className="form-select" aria-label="Default select example" onChange={(e)=>handleChange(e)} value={carPostDetails.fuel} required>
                                <option selected>fuel</option>
                                <option value="CNG&HYBRIDS">CNG & Hybrids</option>
                                <option value="DIESEL">Diesel</option>
                                <option value="ELECTRIC">Electric</option>
                                <option value="LPG">LPG</option>
                                <option value="PETROL">Petrol</option>
                            </select>
                            { click && carPostDetails.fuel === '' && !submitted ? <p className="displayemptymessage" >Please select the fuel</p> : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <select name="transmission" id="transmission" className="form-select" aria-label="Default select example" onChange={(e)=>handleChange(e)} value={carPostDetails.transmission} required>
                                <option selected>Transmission</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                            { click && carPostDetails.transmission === '' && !submitted ? <p className="displayemptymessage">Please select the Transmission</p> :''}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input type="text" className="form-control" name="kmdriven" id="kmdriven" placeholder="KMDriven" onChange={(e)=>handleChange(e)} value={carPostDetails.kmdriven} required />
                            { click && carPostDetails.kmdriven === '' && !submitted ? <p className="displayemptymessage">Please enter the Brand Kmdriven</p>:''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <select name="noofowners" id="noofowners" className="form-select" aria-label="Default select example" onChange={(e)=>handleChange(e)} value={carPostDetails.noofowners} required>
                                <option selected>No Of Owners</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                                <option value="4+">4+</option>
                            </select>
                            {click && carPostDetails.noofowners === '' && !submitted ? <p className="displayemptymessage" >Please select the noofowners Name</p>:''}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="input-group">
                            <div class="input-group-prepend">
                            <div class="input-group-text">Rs</div>
                            </div>
                            <input type="text" className="form-control" name="setaprice" id="setaprice" placeholder="Set a price in Rs" onChange={(e)=>handleChange(e)} value={carPostDetails.setaprice} required />
                            </div>
                            { click && carPostDetails.setaprice === '' && !submitted ? <p className="displayemptymessage">Please enter the price</p> : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="ad title">Ad Title*</label>
                            <textarea className="form-control" name="adtitle" id="adtitle" rows="2" onChange={(e)=>handleChange(e)} value={carPostDetails.adtitle} required></textarea>
                            { click && carPostDetails.city && !submitted === '' ? <p className="displayemptymessage" >Please enter the ad title</p> : ''}
                            <small id="emailHelp" class="form-text text-muted">mention the key features of of your item(eg:brand,model,age,type)</small>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="ad title">Description*</label>
                            <textarea className="form-control" name="description" id="description" rows="4" onChange={(e)=>handleChange(e)} value={carPostDetails.description}></textarea>
                            { click && carPostDetails.description === '' && !submitted ? <p className="displayemptymessage" >Please enter the description</p> : ''}
                            <small id="emailHelp" class="form-text text-muted">Include condition features and reason for selling</small>
                        </div>
                    </div>
                    <label htmlFor="uploadphoto">UploadImageOfCar*</label>
                    <input type="file" className="form-control" name="uploadphoto" id="uploadphoto" onChange={(e)=>handleChange(e)} required /><br />
                    <hr/>
                    <p className="includedetails">Confirm Your Location</p>
                    <input type="text" className="form-control" name="state" id="state" placeholder="State*" onChange={(e)=>handleChange(e)} value={carPostDetails.state} required />
                    {click && carPostDetails.state === '' && !submitted ? <p className="displayemptymessage" >Please enter the State Name</p>:''}
                    <input type="text" className="form-control" name="city" id="city" placeholder="city*" onChange={(e)=>handleChange(e)} value={carPostDetails.city} required />
                    { click && carPostDetails.city === '' && !submitted ?  <p className="displayemptymessage" >Please enter the city Name</p> : ''} 
                    <input type="text" className="form-control" name="neighbourhood" id="neighbourhood" placeholder="neighbourhood*" onChange={(e)=>handleChange(e)} value={carPostDetails.neighbourhood} required />
                    { click && carPostDetails.neighbourhood === '' && !submitted ? <p className="displayemptymessage" >Please enter the neighbourhood Name</p> : ''}
                    <hr/>
                    <p className="includedetails">Review Your Details</p>
                    <label htmlFor="username">Name*</label>
                    <input type="text" className="form-control" name="username" id="username" placeholder="name*" onChange={(e)=>handleChange(e)} value={carPostDetails.username} required />
                    { click && carPostDetails.username === '' && !submitted ? <p className="displayemptymessage" >Please enter the UserName</p> : ''}
                    <p>Lets Verify your Account We will send you a confirmation code by SMS on next steps</p>
                    <label htmlFor="username">Mobile Phone Number*</label>
                    <div className="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">+91</div>
                    </div>
                    <input type="text" className="form-control" name="mobilenumber" id="mobilenumber" placeholder="EnterMobileNumber" onChange={(e)=>handleChange(e)} value={carPostDetails.mobilenumber} required />
                    </div>
                    <label htmlFor="email">Email*</label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="EnterEmail" onChange={(e)=>handleChange(e)} value={carPostDetails.email} required />
                    { click && carPostDetails.mobilenumber === '' && !submitted ? <p className="displayemptymessage" >Please enter the Mobilenumber</p> : '' }
                </div>
                <center><button name="submit" className="btn btn-primary" id="submit" onClick={(e)=>handleSubmit(e)}>Post Now</button></center>
                { click ? submitMsg ? <p className="displayMsgsuccess">Car detials registered successfully</p> : <p className="displayMsgerror">Please Enter All The Details</p> :''}
                {console.log(submitMsg)}
            </form>
        </div>
    </>)
};

export default CarRegister;