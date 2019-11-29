import React, {Component} from 'react';
import './Output.css';

class Output extends Component {
    render () {
        return (
            <div className="display">
                <p>{this.props.result}</p>
            </div>
        );
    }
}

// functional components
// const Output = props => (
//         <div className="display">
//             <p>{props.result}</p>
//         </div>
//     )

export default Output;