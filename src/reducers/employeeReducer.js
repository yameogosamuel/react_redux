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

const defaultState = {
    employees: [],
    error: null,
    isLoading: false,
};

//Reducer d' employes
const employeeReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case FETCH_EMPLOYEES_SUCCESS :
            return {...state, employees: action.playload };
        default:
            return state;
    }
}

export default employeeReducer;
