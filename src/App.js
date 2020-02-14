import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from "./components/Nav";
import JumboHeader from "./components/JumboHeader";
import Section from "./containers/Section";
import JumboFooter from "./components/JumboFooter";
import Footer from "./components/Footer";
import AddEmployee from "./containers/AddEmployee";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        pathname: '',
    };
    this.notifyPathname = this.notifyPathname.bind(this);
  }

    notifyPathname(pathname){
      this.setState({
         pathname: pathname,
      });
    }

  render() {
    return (
        <Router>
            <div className="App">
                <Nav
                    notifyPathname = {this.notifyPathname}
                    pathname = {this.state.pathname}
                />
                <JumboHeader />
                <Switch>
                    <Route path="/"
                           exact
                           component={() => <Section />}
                    />
                    <Route path="/create"
                           exact
                           component={() => <AddEmployee />}
                    />
                    <Route path="/edit/:id"
                           exact
                           employee={this.state.employee}
                           component={(props) => <AddEmployee {...props} />}
                    />
                </Switch>
                <JumboFooter />
                <Footer />
            </div>

        </Router>

    );
  }
}

export default App;
