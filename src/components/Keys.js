import React, {Component} from 'react';
import Button from'./Button'
import './Key.css'
class Keys extends Component {
 
  render () {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="row" >
              <Button name="C"  buttonPressed={this.props.buttonPressed} />
              <Button name="("  buttonPressed={this.props.buttonPressed}>(</Button>
              <Button name=")"  buttonPressed={this.props.buttonPressed}>)</Button>
              <Button name="*"  buttonPressed={this.props.buttonPressed}>X</Button>
          </div>
          <div className="row">
              <Button name="7"  buttonPressed={this.props.buttonPressed}>7</Button>
              <Button name="8"  buttonPressed={this.props.buttonPressed}>8</Button>
              <Button name="9"  buttonPressed={this.props.buttonPressed}>9</Button>
              <Button name="/"  buttonPressed={this.props.buttonPressed}>\</Button>
          </div>
          <div className="row">
              <Button name="4"  buttonPressed={this.props.buttonPressed}>4</Button>
              <Button name="5"  buttonPressed={this.props.buttonPressed}>5</Button>
              <Button name="6"  buttonPressed={this.props.buttonPressed}>6</Button>
              <Button name="-"  buttonPressed={this.props.buttonPressed}>-</Button>
          </div>
          <div className="row">
              <Button name="1"  buttonPressed={this.props.buttonPressed}>1</Button>
              <Button name="2"  buttonPressed={this.props.buttonPressed}>2</Button>
              <Button name="3"  buttonPressed={this.props.buttonPressed}>3</Button>
              <Button name="+"  buttonPressed={this.props.buttonPressed}>+</Button>
          </div>
          <div className="row">              
              <Button name="Back"  buttonPressed={this.props.buttonPressed}>Back</Button>
              <Button name="0"  buttonPressed={this.props.buttonPressed}>0</Button>
              <Button name="."  buttonPressed={this.props.buttonPressed}>.</Button>
              <Button name="="  buttonPressed={this.props.buttonPressed}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Keys;