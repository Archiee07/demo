import React from 'react';
import { useState, useEffect  } from 'react';
import { variables } from './Variables.jsx';
import {
    MDBContainer, MDBRow, MDBTable, MDBTableHead, MDBCard, MDBCardBody, MDBTableBody, MDBBtn, MDBModal, MDBIcon, MDBCol, MDBInput, MDBCheckbox,
    MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCardImage, MDBCardText
}
    from 'mdb-react-ui-kit';

export default function ProfileViewPage() {
    // static data just time being
    let jsonUser = { "id": "1001", "name": "Rampal Singh", "emailID": "Rampal.Singh@gmail.com", "mobileNo": "920021652" };
    let jsonOrder = [{ "id": "1001", "name": "Rampal Singh", "emailID": "Rampal.Singh@gmail.com", "mobileNo": "920021652" }];
    const [Orders, setOrders] = useState(jsonOrder);
    const [User, setUser] = useState(jsonUser);

    const [PhotoFileName, setPhotoFileName] = useState('anonymous.png');
    const [UserData, setUserData] = useState({ });

    // get user data on page load
    useEffect(() => {
        const getData = async () => {
            const headers = {
                'Content-Type': 'application/json'
            };
          const result = await axios(API_URL+ 'User/GetAll', headers);
    
          setUserData(result.data);
        };
    
        getData();
      }, []);
    

    return (
        <MDBContainer className="py-1">
            <MDBRow>
                <MDBCol lg="4">
                    <MDBCard className="mb-4">
                        <MDBCardBody className="text-center">
                            <MDBCardImage
                               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar"
                                className="rounded-circle"
                                style={{ width: '150px' }}
                                fluid />
                            <p className="text-muted mb-1">{User.id}</p>
                            <p className="text-muted mb-4">{User.name}</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Email</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{User.emailID}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Mobile</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{User.mobileNo}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Verified</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">Yes</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>News letter subscribed</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">Yes</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Status</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">Active</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <caption> List of orders</caption>
                <MDBCol>
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBTable align='middle' class="table table-sm">
                                <MDBTableHead>
                                    <tr>
                                        <th> User ID</th>
                                        <th> User Name</th>
                                        <th> User Mobile Number</th>
                                        <th> User Email Address</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {
                                        Orders.map(
                                            Orders =>
                                                <tr key={Orders.id} >
                                                    <td> {Orders.id} </td>
                                                    <td> {Orders.name} </td>
                                                    <td> {Orders.mobileNo}</td>
                                                    <td> {Orders.emailID}</td>
                                                </tr>
                                        )
                                    }
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}