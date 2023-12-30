import React, { Component } from 'react'
import { useState } from 'react';
import BackendService from '../services/BackendService';
import { useSelector, useDispatch } from "react-redux";
import { changeLoggedInUserId } from "../actions/LoggedInUser.jsx";


import {
  MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon, MDBCheckbox
}
  from 'mdb-react-ui-kit';

  function Login() {
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setuserId] = useState('');
    const [userName, setuserName] = useState('');
    const [Password, setPassword] = useState('');
    const [RepeatPassword, setrepeatPassword] = useState('');
    const user = useSelector((state) => state.reducer);


   const dispatch = useDispatch();

   // Handle the onChnage event and set user intput to state variable
   const onChangeHandler = (event) =>{
    console.log( event.target.id+':'+ event.target.value );
    switch (event.target.id) {
      case "loginId":
        setuserId({ userId: event.target.value });
        break;
      case "Password":
        setuserName({ Password: event.target.value });
        break;
      case "repeatPassword":
        setPassword({ RepeatPassword: event.target.value });
        break;
    }
  }
  function userLogin(event) {
    setIsLoggedIn(true)
    alert(IsLoggedIn);
    console.log(IsLoggedIn);
    dispatch(changeUsersName(userId));
    dispatch(changeUsersId(userName));
    console.log('Hello:'+ user.userId);

  }

    return (
      <>
        <MDBContainer class="d-flex justify-content-center">
          <MDBCard className='w-50'>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                  <h4 className="fw-normal mb-5" style={{ color: '#4835d4' }}>User Login Form</h4>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg' />
                    <MDBInput label='Your login ID' id='loginId' type='text' className='w-100' onChange={onChangeHandler}  />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput label='Your password' id='Password' type='password' onChange={onChangeHandler} />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput label='Repeat your password' id='repeatPassword' type='password'  onChange={onChangeHandler} />
                  </div>

                  <MDBBtn className='btn btn-primary btn-block mb-4' size='md' onClick={userLogin}>Login</MDBBtn>

                </MDBCol>

                <MDBCol md='2' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                </MDBCol>

              </MDBRow>
            </MDBCardBody>
          </MDBCard>

        </MDBContainer>
      </>
    )
  }

export default Login
