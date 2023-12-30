import React, { Component } from 'react'
import BackendService from '../services/BackendService'

class ListEmployeeComponent1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [],
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(Id){
        BackendService.deleteEmployee(Id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.Id !== Id)});
        });
    }
    viewEmployee(Id){
        this.props.history.push(`/view-employee/${Id}`);
    }
    editEmployee(Id){
        this.props.history.push(`/add-employee/${Id}`);
    }

    componentDidMount(){
        BackendService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {

        return (
            <div>
                 <div className = "row" style={{ display: "flex" }}>
                    <button className="btn btn-info" style={{ marginLeft: "auto" }} onClick={this.addEmployee}>Add Employee</button>
                 </div>
                 <br></br>
                 <div class="row">
                        <table className = "table table-striped table-bordered table-hover table-sm">

                            <thead>
                                <tr>
                                    <th> Employee ID</th>
                                    <th> Employee Name</th>
                                    <th> Employee Mobile</th>
                                    <th> Employee Email</th>
                                    <th> Employee Address</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.Id} >
                                             <td> { employee.Id} </td> 
                                             <td> { employee.Name} </td>   
                                             <td> {employee.ContactMobile}</td>
                                             <td> {employee.EmailId}</td>
                                             <td> {employee.Address}</td>
                                             <td>
                                             <button style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.Id)} className="btn btn-light mr-1">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                 <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                 <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                 </svg>
                                                 </button>
                                                 
                                                 <button onClick={ () => this.editEmployee(employee.Id)} className="btn btn-light mr-1">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                 <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                 </svg>
                                                 </button>

                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.Id)} className="btn btn-light mr-1">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                 <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                 </svg>
                                                 </button>

                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListEmployeeComponent1
