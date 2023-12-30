import React, { Component } from 'react'
import { useState } from 'react';
import BackendService from '../services/BackendService'
import {
    MDBContainer, MDBRow, MDBTable, MDBTableHead, MDBCard, MDBCardBody, MDBTableBody, MDBBtn, MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
}
    from 'mdb-react-ui-kit';

class ListUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            CurrentUser:{},
            basicModal:false
        }
        this.viewUser = this.viewUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    
    componentDidMount() {
        BackendService.getAllUser().then((res) => {
            this.setState({ users: res.data });
        });

    }
    deleteUser(id) {
        if (window.confirm('Are you sure?')) {
            BackendService.deleteUser(id).then(res => {
                this.setState({ users: this.state.users.filter(users => users.id !== id) });
            });
            alert('User  with id ' + id + 'is deleted successfully')
        }
    }


    viewUser(user) {
        alert('User ID: ' + user.id)

    }

    editUser(id) {
        alert('User ID: ' + id)
        this.props.history.push(`/add-employee/${id}`);
    }

    toggleShow = () => this.setState({ basicModal: !this.state.basicModal });



    render() {

        return (
            <MDBContainer class="d-flex justify-content-center">
                <MDBCard className='w-100' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <caption> List of users </caption>
                            <MDBTable align='middle' class="table table-sm">
                                <MDBTableHead>
                                    <tr>
                                        <th> User ID</th>
                                        <th> User Name</th>
                                        <th> User Mobile</th>
                                        <th> User Email</th>
                                        <th> Verified</th>
                                        <th> Status</th>
                                        <th> Actions</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {
                                        this.state.users.map(
                                            users =>
                                                <tr key={users.id} >
                                                    <td> {users.id} </td>
                                                    <td> {users.name} </td>
                                                    <td> {users.mobileNo}</td>
                                                    <td> {users.emailID}</td>
                                                    <td> {users.isVerified}</td>
                                                    <td> {users.isActive}</td>
                                                    <td>

                                                        <MDBBtn color='link' rounded size='sm' onClick={this.toggleShow} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                                            </svg>
                                                        </MDBBtn>
                                                        <MDBBtn color='link' rounded size='sm' onClick={() => this.editUser(users.id)}  >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                            </svg>
                                                        </MDBBtn>

                                                        <MDBBtn color='link' rounded size='sm' onClick={() => this.deleteUser(users.id)} >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                            </svg>
                                                        </MDBBtn>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </MDBTableBody>
                            </MDBTable>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

                <MDBModal show={this.state.basicModal} setShow={this.state.basicModal} tabIndex='-1' data-mdb-backdrop="static">
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Uesr Details</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={this.toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>Modal body text goes here.
                            </MDBModalBody>
                            <MDBModalFooter>
                                
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>

            </MDBContainer>

        )
    }
} export default ListUser