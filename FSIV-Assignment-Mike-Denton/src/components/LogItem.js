import React from 'react';

class LogItem extends React.Component {
    state = {  }
    render() { 
        return ( 
                <div className="container-item">{this.props.duration}</div>
         );
    }
}
 
export default LogItem;