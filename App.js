import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Topic from "./Pages/Topic";
import NavButtons from "./Components/NavButtons";
import PropertyButtons from "./Components/PropertyButtons";

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type: "SET_ANIMAL", payload: "Rabbit"});
    dispatch({type: "SET_FRUIT", payload: "Banana"});
    dispatch({type: "SET_COLOUR", payload: "Purple"});
    dispatch({type: "SET_VEHICLE", payload: "Motorcycle"});
  }
  
  componentDidUpdate() {
    const {dispatch, redirect} = this.props;
    if (redirect.path !== null) {
      dispatch({type: "PUSH", payload: null});
    }
  }
  
  render() {
    const {path} = this.props.redirect;

    return (
      <div>
        {path !== null && <Redirect push to={path} />}
        <NavButtons />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/topic" component={Topic} />
          <Route exact path="/topic/id/:id" component={Topic} />
          <Route exact path="/topic/id/:id/id2/:id2" component={Topic} />
        </Switch>
        <PropertyButtons />
      </div>
    );
  }
}
          
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};
          
export default connect(mapStateToProps, mapDispatchToProps)(App);
