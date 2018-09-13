import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class NavButtons extends Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(pathname) {
    this.props.dispatch({type: "PUSH", payload: pathname});
  }
  
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("/")}>Home</button>
        <button onClick={() => this.handleClick("/about")}>About</button>
        <button onClick={() => this.handleClick("/topic")}>No Topic</button>
        <button onClick={() => this.handleClick("/topic/id/1")}>Topic 1</button>
        <button onClick={() => this.handleClick("/topic/id/1/id2/2")}>Topic 1 part 2</button>
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
          
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavButtons));
