import React from 'react';
import ClockComponent from './Clock';
import TextBox from "./TextBox";
import Button  from "./Button";
import LogItem from "./LogItem";

class Timer extends React.Component {
    state = { 
        running     :   0,
        startTime   :   "",
        endTime     :   "",
        duration    :   []
     }
    startClick = () => {
        this.setState({'startTime':new Date(),'running':1});
    }
    endClick = () => {
        var timeNow=new Date();
        this.setState({'endTime':timeNow,'running':0});
        var currentStartTime = this.state.startTime;
        var currentEndTime = timeNow;

        //calculate duration
        var duration=(currentEndTime.getTime()-currentStartTime.getTime())/1000;
        var minutesDiff=Math.floor(duration / 60) % 60;    
        const secondsDiff = Math.floor(duration  % 60);
        var durationText="Duration => minutes: "+minutesDiff+" seconds: "+secondsDiff;
        this.setState({'duration': this.state.duration.concat(durationText)});
    }
    resetClick = () => {
        this.setState({'startTime':'','endTime':'','running':0,'duration':[]});
    }
    render() { 
        return (
        <div >
            <div id="mainContainer"  className="container">
                <span>Start Time:</span> 
                <TextBox value={this.state.startTime}></TextBox>                
                <span>End Time:</span>
                <TextBox value={this.state.endTime}></TextBox> 
                <ClockComponent time={this.state.startTime} clockRunning={this.state.running}></ClockComponent> 
                <Button title="Start" buttonClick={this.startClick}></Button>
                <Button title="Stop"  buttonClick={this.endClick}></Button>
                <Button title="Reset" buttonClick={this.resetClick}></Button>
                
            </div>
            <div>
                {this.state.duration.map((durationNow,i) => (
                    <LogItem key={i} duration={durationNow}></LogItem>
                ))}
            </div>
           
            
        </div> 
         );
    }
}
 
export default Timer;