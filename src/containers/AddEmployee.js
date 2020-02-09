import React, {Component} from "react";

import './AddEmployee.css';

class AddEmployee extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="add-employee">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="matr"
                            placeholder="Entrer le matricule"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="nom"
                            placeholder="Entrer le nom"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="prenom"
                            placeholder="Entrer le prénom"
                        />
                    </div>
                    <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="service"
                                placeholder="Entrer le service"
                            />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button type="button" className="btn btn-default">
                            cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }

}

export default AddEmployee;
