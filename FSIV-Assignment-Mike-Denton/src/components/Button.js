import  React from "react";

class Button extends React.Component {
    state = {  }
    handleClick = () => {
        this.props.buttonClick("hello");
    }
    render() { 
        return (
            <button onClick={this.handleClick}>{this.props.title}</button>
          );
    }
}
 
export default Button;