import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      days: 0,
      hours:0,
      minutes:0,
      seconds:0,
    };
  }
  componentDidMount(){
    let countDownDate = new Date("Aug 10, 2018 15:37:25").getTime()
    this.interval = setInterval(function() {
      // the time right now
      var today = new Date().getTime()
      // Find the distance between now an the count down date
      var diff = countDownDate - today
      // Time calculations for days, hours, minutes and seconds
      this.setState({
      days: Math.floor(diff/ (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff% (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)
  }

  // Update the count down every 1 second
  componentWillUnmount() {
  clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Countdown">
        <h1>Countdown Clock</h1>
        <div id="clockdiv">
          <div>
            <span class="days">{this.state.days}</span>
            <div class="smalltext">Days</div>
          </div>
          <div>
            <span class="hours">{this.state.hours}</span>
            <div class="smalltext">Hours</div>
          </div>
          <div>
            <span class="minutes">{this.state.minutes}</span>
            <div class="smalltext">Minutes</div>
          </div>
          <div>
            <span class="seconds">{this.state.seconds}</span>
            <div class="smalltext">Seconds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
