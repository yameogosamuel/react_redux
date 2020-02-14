import React, {Component} from "react";
import { addEmployee } from '../actions/employee.actions';
import { connect } from 'react-redux';

import './AddEmployee.css';
import {dispatch} from "rxjs/internal/observable/pairs";

class AddEmployee extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: 0,
            matr: '',
            nom: '',
            prenom: '',
            service: '',
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);
    }

    handleOnValueChange(e) {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({
            matr: '',
            nom: '',
            prenom: '',
            service: '',
        });
    }

    componentWillMount() {
        const props = this.props;

        if(props.location && props.location.state) {
            const employee = props.location.state.employee;

            this.setState({
                id: employee.id,
                matr: employee.matr,
                nom: employee.nom,
                prenom: employee.prenom,
                service: employee.service
            })
        }
    }


    render() {
        return (
            <div className="add-employee">
                {this.props.error ?
                    <div className="alert alert-danger" role="alert">
                        {this.props.error.message}
                    </div> : ''
                }
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="matr"
                            placeholder="Entrer le matricule"
                            value={this.state.matr}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="nom"
                            placeholder="Entrer le nom"
                            value={this.state.nom}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="prenom"
                            placeholder="Entrer le prénom"
                            value={this.state.prenom}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="service"
                                placeholder="Entrer le service"
                                value={this.state.service}
                                onChange={this.handleOnValueChange.bind(this)}
                            />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button type="button" className="btn btn-default"
                            onClick={this.handleReset.bind(this)}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        error: state.employeesData.error,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return {
        onAdd: (employee) => {
            dispatch(addEmployee(employee));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
