import React, { Component } from 'react';
import {connect} from 'react-redux';

class Topic extends Component { 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const {history} = this.props;
    history.push("/");
  }
  
  render() {
    const {match} = this.props;
    return (
      <div>
        <h1>Topic</h1>
        {!match.params.id && <p>No id provided.</p>}
        {!match.params.id && <button onClick={() => this.handleClick("/")}>Back to Home</button>}
        {match.params.id && <p>The id is <b>{match.params.id}</b></p>}
        {match.params.id2 && <p>The id2 is <b>{match.params.id2}</b></p>}
        <hr />
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
          
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
