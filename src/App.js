import React from 'react';
import Counter from './Counter';
import Header from './Header';
import Main from './Main';
import MobileTip from './MobileTip';
import Footer from './Footer';

class App extends React.Component {

  state = {
    date: "",
    challenges: [
      {ChallengeId: "966967c4-62ee-11ea-bc55-0242ac130003", challengeDesc: "Bring a reusable bag when you go shopping", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save XX litres of water"},
      {ChallengeId: "96696a26-62ee-11ea-bc55-0242ac130003", challengeDesc: "Don't buy anything packaged in plastic", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save XXX"},
      {ChallengeId: "96696ce2-62ee-11ea-bc55-0242ac130003", challengeDesc: "Turn the tap off when brushing your teeth", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save ABC"},
      {ChallengeId: "96697002-62ee-11ea-bc55-0242ac130003", challengeDesc: "Unplug appliances in standby mode", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save DEF"}
    ],
    completedChallenges: [
      {ChallengeId: "96696b2a-62ee-11ea-bc55-0242ac130003", challengeDesc: "Use a reusable water bottle", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save YYY"},
      {ChallengeId: "96696c10-62ee-11ea-bc55-0242ac130003", challengeDesc: "Switch all your bills and bank statements to paperless", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save ZZZ"}
    ],
    todaysChallenge: {ChallengeId: "1", challengeDesc: "", completed: 0, userId: 1, accepted: 0, tips: "Tips go here"},
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


  render() {
    return (
      <div className="container-fluid">
        <Counter counter={this.state.completedChallenges.length}/>
        <Header
          getDateFunc={this.state.date} />
        <Main
          todaysChallenge={this.state.todaysChallenge}
          newChallengeFunc={this.newChallenge}
          />
        <MobileTip />
        <Footer />
      </div>
    );
  }
}

export default App;
