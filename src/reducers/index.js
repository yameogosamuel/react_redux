import { combineReducers} from "redux";
import employees from './employeeReducer'


export default combineReducers({
    employeesData: employees,
});
