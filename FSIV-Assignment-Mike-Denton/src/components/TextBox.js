import React from 'react';
import {currentFormattedTime} from '../utils';
class TextBox extends React.Component {
    state = {  }
    handleChange = (event) => {
        //console.log(event.target.value);
    }
    render() { 
        var timeNow = "";
        if(this.props.value)
            timeNow = currentFormattedTime(this.props.value);
        return (  
            <input type="textbox" value={timeNow} onChange={this.handleChange} className="form-field"></input>
        );
    }
}
 
export default TextBox;