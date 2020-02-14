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
} from '../actions/types';
import {employees} from "../data";

const defaultState = {
    employees: [],
    error: null,
    isLoading: false,
};

//Reducer d' employes
const employeeReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case ADD_EMPLOYEE_SUCCESS :
            return {...state, employees: [...state.employees, action.playload ]};
        case ADD_EMPLOYEE_ERROR :
            return {...state, error: action.playload };
        case DELETE_EMPLOYEE_SUCCESS:
            const filteredEmployees = state.employees.filter(employee => employee.id !==action.playload.id);
            return {...state, employees: filteredEmployees};
        case DELETE_EMPLOYEE_ERROR :
            return {...state, error: action.playload };
        case EDIT_EMPLOYEE_SUCCESS:
            const updatedEmployee = state.employees.filter(employee => employee.id !== action.payload.id);
            return {...state, employees: [...updatedEmployee, action.playload]}
        case EDIT_EMPLOYEE_ERROR:
            return {...state, error: action.playload };
        case FETCH_EMPLOYEES_SUCCESS :
            return {...state, employees: action.playload };
        case FETCH_EMPLOYEES_LOADING :
            return { ...state, isLoading: action.playload };
        case FETCH_EMPLOYEES_ERROR :
            return {...state, error: action.playload };
        default:
            return state;
    }
}

export default employeeReducer;

