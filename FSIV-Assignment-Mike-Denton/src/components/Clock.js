import React from 'react';
import Clock from 'react-live-clock';

class ClockComponent extends React.Component {
    state = { 
        clockRunning: false,
     }
    render() { 
        let clockN ;
        if(this.props.clockRunning){
        var timeNow = this.props.time;
            clockN = <h1><Clock format={'hh:mm:ss A'} filter={date => timeNow.replace('8', '7a')} ticking={true}  /></h1>
        }
        else
            clockN = "";
        return ( 
            <div className="text-center">
                {clockN}
            </div>
         );
    }
}
 
export default ClockComponent;