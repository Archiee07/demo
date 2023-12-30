import React, { Component } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import {
    MDBContainer, MDBRow, MDBTable, MDBTableHead, MDBCard, MDBCardBody, MDBTableBody, MDBBtn, MDBModal, MDBIcon, MDBCol, MDBInput, MDBCheckbox,
    MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCardImage, MDBCardText
}
    from 'mdb-react-ui-kit';

function Logout() {

    const navigate = useNavigate();
    const key_IsUserLoggedIn = 'IsLoggedId';
    const key_userRole = 'userRole';
    const key_userName = 'userName';



    function btnUserLogout(e) {
        e.preventDefault();

        // setting up cookies
        delete_cookie(key_IsUserLoggedIn);
        delete_cookie(key_userRole);
        delete_cookie(key_userName);
        bake_cookie(key_IsUserLoggedIn, 'false');
        navigate('/');
        window.location.reload(true);

    }
    return (
        <>
        <MDBContainer class="d-flex justify-content-center">
          <MDBCard className='w-50'>
            <MDBCardBody>
              <MDBRow>
                <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <h4 className="fw-normal mb-5" style={{ color: '#4835d4' }}>You have been logged out successfully!</h4>
                <h2 className="fw-normal mb-5" style={{ color: '#4835d4' }}>Thank you</h2>
                  <MDBBtn gradient="young-passion" size="sm" onClick={btnUserLogout}>Close to Disconnect Session</MDBBtn>
  
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
  
        </MDBContainer>
      </>
    );

} export default Logout