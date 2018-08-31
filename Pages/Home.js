import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component { 
  render() {
    const {home} = this.props;
    return (
      <div>
        <h1>Home</h1>
        <p>The animal is <b>{home.animal}</b></p>
        <p>The fruit is <b>{home.fruit}</b></p>
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
          
export default connect(mapStateToProps, mapDispatchToProps)(Home);
