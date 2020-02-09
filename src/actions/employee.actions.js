import {
    ADD_EMPLOYEE_ERROR,
    ADD_EMPLOYEE_LOADING,
    ADD_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_ERROR,
    DELETE_EMPLOYEE_LOADING,
    DELETE_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_ERROR,
    EDIT_EMPLOYEE_LOADING,
    EDIT_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEES_ERROR,
    FETCH_EMPLOYEES_LOADING,
    FETCH_EMPLOYEES_SUCCESS
} from './types';
//plus utile car on utilisera le serveur.
import {employees} from "../data";

//fonction  actionsCreator qui retourne une action
export const  fetchEmployeesSuccess = (data) => {
    return {
        type: FETCH_EMPLOYEES_SUCCESS,
        playload: data,
    }
}

export const fetchEmployees = () => {
    return (dispatch) => {
        dispatch(fetchEmployeesSuccess(employees));
    }
}
