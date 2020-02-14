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
//import {employees} from "../data";
import axios from 'axios';
import { history} from "../index";

const url='http://localhost:8080/employees';

//CREATE-----------------------------------------------------------------
export const createEmployeesSuccess = (data) => {
    return {
        type: ADD_EMPLOYEE_SUCCESS,
        playload: data,
    }
};

export const createEmployeesError = (data) => {
    return {
        type: ADD_EMPLOYEE_ERROR,
        playload: data,
    }
};

export const addEmployee = (employee) => {
    if(employee.id){
        const data = {
            id: employee.id,
            matr: employee.matr,
            nom: employee.nom,
            prenom: employee.prenom,
            service: employee.service,
        };
        return (dispatch) => {
            dispatch(editEmployee(data));
        }

    }else{
        const data = {
            matr: employee.matr,
            nom: employee.nom,
            prenom: employee.prenom,
            service: employee.service,
        };
        return (dispatch) => {
            return axios.post(url, data)
                .then(resp  => {
                    dispatch(createEmployeesSuccess(resp.data));
                    history.push('/');
                }).catch(err => {
                    debugger;
                    const errorPayload = {};
                    errorPayload['message'] = err.response.data.error;
                    errorPayload['status'] = err.response.status;
                    dispatch(createEmployeesError(errorPayload));
                });
        }
    }

}

//EDIT-------------------------------------------------------------------

export const editEmployeesError = (data) => {
   return {
       type: EDIT_EMPLOYEE_ERROR,
       playload: data,
   }
};

export const editEmployeesSuccess = (data) => {
    return {
        type: EDIT_EMPLOYEE_SUCCESS,
        playload: data,
    }
};

export const editEmployee = (data) => {
    const id = data.id;

    return (dispatch) => {
        return axios.put(url+`/${id}`, data)
            .then(resp  => {
                dispatch(editEmployeesSuccess(resp.data));
                history.push('/');
            }).catch(err => {
                const errorPayload = {};

                errorPayload['message'] = err.response.data.error;
                errorPayload['status'] = err.response.status;

                dispatch(editEmployeesError(errorPayload));
            });
    }

}

//DELETE-----------------------------------------------------------------

export const deleteEmployeesSuccess = (id) => {
    return {
        type: DELETE_EMPLOYEE_SUCCESS,
         playload: {
            id: id,
         }
    }
};

export const deleteEmployeesError = (data) => {
    return {
        type: DELETE_EMPLOYEE_ERROR,
        playload: data,
    }
};

export const deleteEmployee = (id) => {
    return (dispatch) => {
        return axios.delete(url+`/${id}`)
            .then(resp  => {
                dispatch(deleteEmployeesSuccess(id));
                history.push('/');
            }).catch(err => {
                const errorPayload = {};

                errorPayload['message'] = err.response.data.error;
                errorPayload['status'] = err.response.status;

                dispatch(deleteEmployeesError(errorPayload));
            });
    }
}

//FETCH------------------------------------------------------------------

//fonction  actionsCreator qui retourne une action
export const  fetchEmployeesSuccess = (data) => {
    return {
        type: FETCH_EMPLOYEES_SUCCESS,
        playload: data,
    }
}

export const fetchEmployeesLoading = (data) =>{
    return {
        type: FETCH_EMPLOYEES_LOADING,
        playload: data,
    };
};

export const fetchEmployeesError = (data) =>{
    return {
        type: FETCH_EMPLOYEES_ERROR,
        playload: data,
    };
};

/*const normalizeResponse = (data) => {
    const arr = data.map(item => {
        const keys = Object.keys(item);

        keys.forEach(k => {
            item[k.toLowerCase()] = item[k];
            delete item[k];
        });
        return item;
    });
    return arr;
};*/

export const fetchEmployees = () => {
    let isLoading = true;
    return (dispatch) => {
        dispatch(fetchEmployeesLoading(isLoading));
        return axios.get(url)
            .then(resp => {
                const data = resp.data;
                dispatch(fetchEmployeesSuccess(data));
                isLoading = false;
                dispatch(fetchEmployeesLoading(isLoading));
            }).catch(err => {
                const errorPayload = {};
                errorPayload['message'] = err.response.data.error;
                errorPayload['status'] = err.response.status;
                dispatch(fetchEmployeesError(errorPayload));
                isLoading = false;
                dispatch(fetchEmployeesLoading(isLoading));
            });

    }
}
