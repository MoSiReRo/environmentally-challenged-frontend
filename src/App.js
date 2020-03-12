import React from 'react';
import Header from './Header';
import Main from './Main';
import MobileTip from './MobileTip';
import Footer from './Footer';

class App extends React.Component {

  state = {
    date: "",
    challenges: [
      {challengeId: "966967c4-62ee-11ea-bc55-0242ac130003", challengeDesc: "Bring a reusable bag when you go shopping", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save XX litres of water"},
      {challengeId: "96696a26-62ee-11ea-bc55-0242ac130003", challengeDesc: "Don't buy anything packaged in plastic", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save XXX"},
      {challengeId: "96696ce2-62ee-11ea-bc55-0242ac130003", challengeDesc: "Turn the tap off when brushing your teeth", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save ABC"},
      {challengeId: "96697002-62ee-11ea-bc55-0242ac130003", challengeDesc: "Unplug appliances in standby mode", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save DEF"}
    ],
    completedChallenges: [
      {challengeId: "96696b2a-62ee-11ea-bc55-0242ac130003", challengeDesc: "Use a reusable water bottle", completed: 1, userId: 1, accepted: 0, tips: "Doing this for a year will save YYY"},
      {challengeId: "96696c10-62ee-11ea-bc55-0242ac130003", challengeDesc: "Switch all your bills and bank statements to paperless", completed: 1, userId: 1, accepted: 0, tips: "Doing this for a year will save ZZZ"}
      
    ],
    todaysChallenge: {challengeId: "1", challengeDesc: "", completed: 0, userId: 1, accepted: 1, tips: "Tips go here"},
    isAccepted: false,
    isCompleted: false,
    isEndOfDay: false
  };

 
  componentDidMount() {
    // displays current date
    this.getDate();

    // generates random task at given time every 24hrs
    const currentTime = new Date().getTime();  //current unix timestamp
    const execTime = new Date().setHours(5,0,0,0);  //API call time = today at 05:00
    let timeLeft;
    if(currentTime < execTime) {
      //it's currently earlier than 05:00
      timeLeft = execTime - currentTime;
    } else {
      //it's currently later than 05:00, schedule for tomorrow at 05:00
      timeLeft = execTime + 86400000 - currentTime
    }
        this.interval = setInterval(() => this.newChallenge(), 86400000);
        this.timeout = setTimeout(() => this.newChallenge(), timeLeft);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getDate = () => {
    let today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    const fullDate = dd + "/" + mm + "/" + yyyy;

    this.setState({
      date: fullDate
    });
  }

// Picks a random challenge from the array when 'Try Another' button is clicked
// Also same function used to generate challenge at start of day
  newChallenge = () => {
    const challenges = this.state.challenges;
    const i = (Math.floor(Math.random() * challenges.length));
    const randomChallenge = challenges[i];
    console.log(randomChallenge);
    this.setState({
      todaysChallenge: randomChallenge
    })
    return randomChallenge;
  }

  challengeAccepted = () => {
    // get todaysChallenge from state
    const acceptedChallenge = this.state.todaysChallenge;
    // update accepted: 1 (use 0/1 rather than false/true bc that's how SQL stores booleans)
    acceptedChallenge.accepted = 1;
    // update state
    this.setState({
      todaysChallenge: acceptedChallenge,
      isAccepted: true
    });
    console.log(acceptedChallenge);
  }


  challengeCompleted = () => {
    // get todaysChallenge from state
    const completedChallenge = this.state.todaysChallenge;
    // update completed: 1
    completedChallenge.completed = 1;
    // update state
    this.setState({
      todaysChallenge: completedChallenge,
      isCompleted: true,
      isEndOfDay: true
    });
    console.log(completedChallenge);
    // get array of completed challenges
    const doneChallengeList = this.state.completedChallenges;
    // push todaysChallenge into completed array
    doneChallengeList.push(completedChallenge);
    // update state of completed array, counter then counts it
    this.setState({
      completedChallenges: doneChallengeList
    });
  }


// function that runs if you don't complete an accepted challenge
// finishes day, hiding buttons and leaving failed challenge to be regenerated
  finishDay = () => {
    // get todaysChallenge from state
    const failedChallenge = this.state.todaysChallenge;
    // keep completed as 0
    failedChallenge.completed = 0;
    // update state to end of day so button disappears on click
    this.setState({
      isEndOfDay: true
    });
    console.log(failedChallenge);
  }


  render() {
    return (
      <div className="container-fluid">
        
        <Header
          getDateFunc={this.state.date} />
        <Main
          todaysChallenge={this.state.todaysChallenge}
          newChallengeFunc={this.newChallenge}
          challengeAcceptedFunc={this.challengeAccepted}
          challengeCompletedFunc={this.challengeCompleted}
          isAccepted={this.state.isAccepted}
          isEndOfDay={this.state.isEndOfDay}
          finishDayFunc={this.finishDay}
          counter={this.state.completedChallenges.length}
        />
        <MobileTip
          todaysChallengeTip={this.state.todaysChallenge.tips}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
