// import * as React from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {sendinterestedmailtoseller} from '../Redux/productSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailPopUp = (props) => {
  
  const {showModal,setShowModal,product} = props;
  const handleClose = () => setShowModal(false);
  const dispatch = useDispatch();
  const [userDetails,setUserDetails] = useState({
                                                    name:'',
                                                    phoneNumber:'',
                                                    description:''
                                                });
  const handleChange = (e) => {
     console.log(e.target.value);
     var newUserDetails = {...userDetails};
     newUserDetails[e.target.name] = e.target.value;
     setUserDetails(newUserDetails);
  };
  
  const handleSendEmailToSeller = async (mailerDetails) =>
  {
     await dispatch(sendinterestedmailtoseller(mailerDetails)).then(res=>showToastMessage())
     clearForm();
     handleClose();

  }

  const clearForm = () =>{
    console.log("inside clear Form")
     setUserDetails({
        name:'',
        phoneNumber:'',
        description:''
    })
  };

  const showToastMessage = () => {
    toast.success('Email Send To Seller Successfully!', {
        position: toast.POSITION.TOP_LEFT
    });
};

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Notify Product Seller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control name="name" type="text" placeholder="Enter Name" onChange={(e)=>handleChange(e)} value={userDetails.name} autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control name="phoneNumber" type="text" placeholder="Enter PhoneNumber" onChange={(e)=>handleChange(e)} value={userDetails.phoneNumber} autoFocus  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
              <Form.Control name="description" as="textarea" placeholder="say something to seller" onChange={(e)=>handleChange(e)} value={userDetails.description} rows={2} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>handleSendEmailToSeller({userDetails:userDetails,product:product})}> Send Email To User</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default EmailPopUp;

// const EmailToSeller = () => {

    
//     return (
//         <div style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
//             <div
//                 className="col-5"
//                 style={{
//                     marginTop: `${window.innerHeight/4}px`,
//                     marginLeft:'auto',
//                     marginRight:'auto',
//                     textAlign: 'center',
//                     height: 'auto',
//                     backgroundColor: '#8585eae0',
//                     borderRadius:"5px",
//                     padding:"10px 10px"
//                 }}
//             >
//                 <h4 style={{fontWeight:"bolder"}}>Send Email To The Seller</h4><br/>
//                 <input type="name" className="form-control"  placeholder="enter your name"></input>
//                 <br></br>
//                 <input type="text" className="form-control" placeholder="phone number"></input>
//                 <br></br>
//                 <textarea className="form-control" placeholder="say something to seller"></textarea>
//                 <br></br>
//                 <button className='btn btn-success'>Send Email to Seller</button>
//             </div>
//         </div>
//     );
// };

// export default EmailToSeller;

