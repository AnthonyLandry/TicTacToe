import React, {Component} from 'react';

import Keys from './components/Keys';
import Output from './components/Output';

class App extends Component {
  state = {
    result: ""
  };

  buttonPressed = (e) => {
    const buttonName = e.target.textContent
    
    if (buttonName === "=") {
      this.calculate();
      
    } else if (buttonName === "C") {
      this.reset();
    } 

    else if(buttonName === "Back") {
      this.backspace();
    }
    
    else {

      this.setState({
        result: this.state.result + buttonName
        
    });
  };
};



  calculate = () => {
    try {
    this.setState ({
      result: (eval(this.state.result) || "" )  + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };
  
  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };


  render () {
    return (
      <div>
        <Output result={this.state.result}/>
        <Keys buttonPressed={this.buttonPressed}/>
      </div>
  
    );
  }
}

export default App;
