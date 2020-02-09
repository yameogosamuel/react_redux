import React, {Component} from "react";

import './JumboHeader.css'

class JumboHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="JumboHeader">
                <div className="jumbotron jumbotron-fluid JumboHeader">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default JumboHeader;
