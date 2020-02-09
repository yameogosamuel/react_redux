import React, {Component} from "react";
import Employee from "../components/Employee";
import {employees} from "../data";
import {connect} from "react-redux";

class Section extends Component {

    constructor(props){
        super(props);
    }

    render() {
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
                                <Employee key={employee.id} employee={employee}/>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employeesData.employees || [],
    }
}

export default connect(mapStateToProps, null)(Section);
