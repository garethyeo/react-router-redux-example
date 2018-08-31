import React, { Component } from 'react';
import {connect} from 'react-redux';

class About extends Component { 
  render() {
    const {about} = this.props;
    return (
      <div>
        <h1>About</h1>
        <p>The colour is <b>{about.colour}</b></p>
        <p>The vehicle is <b>{about.vehicle}</b></p>
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
          
export default connect(mapStateToProps, mapDispatchToProps)(About);
