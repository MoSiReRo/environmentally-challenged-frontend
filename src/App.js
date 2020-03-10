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
      {ChallengeId: "96696b2a-62ee-11ea-bc55-0242ac130003", challengeDesc: "Use a reusable water bottle", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save YYY"},
      {ChallengeId: "96696c10-62ee-11ea-bc55-0242ac130003", challengeDesc: "Switch all your bills and bank statements to paperless", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save ZZZ"},
      {ChallengeId: "96696ce2-62ee-11ea-bc55-0242ac130003", challengeDesc: "Turn the tap off when brushing your teeth", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save ABC"},
      {ChallengeId: "96697002-62ee-11ea-bc55-0242ac130003", challengeDesc: "Unplug appliances in standby mode", completed: 0, userId: 1, accepted: 0, tips: "Doing this for a year will save DEF"}
    ],
    todaysChallenge: {ChallengeId: "1", challengeDesc: "Click 'Try Another' to see today's challenge", completed: 0, userId: 1, accepted: 0, tips: "Tips go here"},
  };

  componentDidMount() {
    this.getDate();
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


  // Temporary array of challenges
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
        <Counter />
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
