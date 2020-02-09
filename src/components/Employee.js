import React from "react";

const Employee = ({employee}) => {
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.matr}</td>
            <td>{employee.nom}</td>
            <td>{employee.prenom}</td>
            <td>{employee.service}</td>
            <td>
                <button type="button" className="btn btn-danger">
                    Delete
                </button>
                <button type="button" className="btn btn-default">
                    Edit
                </button>
            </td>
        </tr>
    )
}

export default Employee;

