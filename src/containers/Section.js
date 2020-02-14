import React, {Component} from "react";
import Employee from "../components/Employee";
import {connect} from "react-redux";
import {fetchEmployees} from "../actions/employee.actions";
import { deleteEmployee } from "../actions/employee.actions";
import { history } from "../index";


class Section extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.onFetch();
    }

    handleEdit(employee){
        history.push({
            pathname: `/edit/${employee.id}`,
            state: {
                employee: employee,
            }
        })
    }

    render() {
        if(this.props.isLoading) {
            return (
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                </div>
        )} else if(this.props.error){
                return (
                    <div className="alert alert-danger" role="alert">
                        {this.props.error.message}
                    </div>
                )} else {
                        return (
                            <div>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Matricule</th>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Service</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.props.employees.map(employee => {
                                            return (
                                                <Employee key={employee.id}
                                                          employee={employee}
                                                          onDelete={this.props.onDelete}
                                                          onEdit={this.handleEdit.bind(this)}
                                                />
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employeesData.employees || [],
        error: state.employeesData.error || null,
        isLoading: state.employeesData.isLoading,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        onFetch: () => {
            dispatch(fetchEmployees());
        },
        onDelete: (id) => {
            dispatch(deleteEmployee(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
