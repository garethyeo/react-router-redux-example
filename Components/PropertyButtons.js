import React, { Component } from 'react';
import {connect} from 'react-redux';

class PropertyButtons extends Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(type, payload) {
    const {dispatch} = this.props;
    dispatch({type, payload});
  }
  
  render() {
    return (
      <div>
        <div>
          <b>Choose your animal: </b>
          <button onClick={() => this.handleClick("SET_ANIMAL", "Kangaroo")}>Kangaroo</button>
          <button onClick={() => this.handleClick("SET_ANIMAL", "Cheetah")}>Cheetah</button>
          <button onClick={() => this.handleClick("SET_ANIMAL", "Rabbit")}>Rabbit</button>
          <button onClick={() => this.handleClick("SET_ANIMAL", "Monkey")}>Monkey</button>
        </div>
        <div>
          <b>Choose your fruit: </b>
          <button onClick={() => this.handleClick("SET_FRUIT", "Apple")}>Apple</button>
          <button onClick={() => this.handleClick("SET_FRUIT", "Banana")}>Banana</button>
          <button onClick={() => this.handleClick("SET_FRUIT", "Cherry")}>Cherry</button>
          <button onClick={() => this.handleClick("SET_FRUIT", "Durian")}>Durian</button>
        </div>
        <div>
          <b>Choose your colour: </b>
          <button onClick={() => this.handleClick("SET_COLOUR", "Yellow")}>Yellow</button>
          <button onClick={() => this.handleClick("SET_COLOUR", "Red")}>Red</button>
          <button onClick={() => this.handleClick("SET_COLOUR", "Green")}>Green</button>
          <button onClick={() => this.handleClick("SET_COLOUR", "Purple")}>Purple</button>
        </div>
        <div>
          <b>Choose your vehicle: </b>
          <button onClick={() => this.handleClick("SET_VEHICLE", "Motorcycle")}>Motorcycle</button>
          <button onClick={() => this.handleClick("SET_VEHICLE", "Van")}>Van</button>
          <button onClick={() => this.handleClick("SET_VEHICLE", "Car")}>Car</button>
          <button onClick={() => this.handleClick("SET_VEHICLE", "Truck")}>Truck</button>
        </div>
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
          
export default connect(mapStateToProps, mapDispatchToProps)(PropertyButtons);
