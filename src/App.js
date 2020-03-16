import React from 'react';
import Counter from './Counter';
import Header from './Header';
import Main from './Main';
import MobileTip from './MobileTip';
import Footer from './Footer';
import axios from 'axios';

class App extends React.Component {

  state = {
    uncompletedChallenges: [
    ],
    completedChallenges: [

    ],
    todaysChallenge: {
      challengeId: "1",
      challengeDesc: "None selected yet - click 'Try Another'",
      completed: 0,
      userId: 1,
      accepted: 0,
      // Need a default statement for tips - corny, but something like this?
      tips: "Be the change you want to see in the world"
    },
    isAccepted: false,
    isCompleted: false,
    isEndOfDay: false,
    successfulDay: false,
    stylePath: "styles.css"
  };

  componentWillMount() {
    setInterval(this.date, 1000)
  }

  componentDidMount() {

    axios.get('https://wqsn40ohub.execute-api.eu-west-2.amazonaws.com/dev/challenge')
      .then(response => {
        const uncompletedChallenges = response.data.challenge.filter((e) => {
          return e.completed === 0;
        });
        const completedChallenges = response.data.challenge.filter((e) => {
          return e.completed === 1;
        });
        // handle success
        this.setState({
          uncompletedChallenges: uncompletedChallenges,
          completedChallenges: completedChallenges
        });
      })
      .catch(error => {
        //handle error
        console.error(error);
      });


    axios.get('https://wqsn40ohub.execute-api.eu-west-2.amazonaws.com/dev/accepted-challenge')
      .then(response => {
        let acceptedChallenge = response.data.challenge[0];
        console.log(acceptedChallenge);
        if (acceptedChallenge != undefined) {
          this.setState({
            todaysChallenge: acceptedChallenge,
            isAccepted: true
          });
        }
      })
      .catch(error => {
        //handle error
        console.error(error);
      });


    // generates random task at given time every 24hrs
    const currentTime = new Date().getTime();  //current unix timestamp
    const execTime = new Date().setHours(5, 0, 0, 0);  //API call time = today at 05:00
    let timeLeft;
    if (currentTime < execTime) {
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


  // Picks a random challenge from the array when 'Try Another' button is clicked
  // Also same function used to generate challenge at start of day
  newChallenge = () => {
    const challenges = this.state.uncompletedChallenges;
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
    const id = acceptedChallenge.challengeId;
    // update accepted: 1 (use 0/1 rather than false/true bc that's how SQL stores booleans)
    acceptedChallenge.accepted = 1;
    console.log(acceptedChallenge)

    axios.put(`https://wqsn40ohub.execute-api.eu-west-2.amazonaws.com/dev/challenge/${id}`, acceptedChallenge)
      .then(response => {

        // update state
        this.setState({
          todaysChallenge: acceptedChallenge,
          isAccepted: true
        });
      })
      .catch(error => {
        //handle error
        console.error(error);
        console.log(acceptedChallenge)
      });

    console.log(acceptedChallenge);

  }


  challengeCompleted = () => {
    // get todaysChallenge from state
    const completedChallenge = this.state.todaysChallenge;
    const id = completedChallenge.challengeId;

    // update completed: 1
    completedChallenge.completed = 1;

    axios.put(`https://wqsn40ohub.execute-api.eu-west-2.amazonaws.com/dev/challenge/${id}`, completedChallenge)
      .then(response => {

        // update state
        this.setState({
          todaysChallenge: completedChallenge,
          isCompleted: true,
          isEndOfDay: true,
          successfulDay: true
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


      })
      .catch(error => {
        //handle error
        console.error(error);
      });


  }


  // function that runs if you don't complete an accepted challenge
  // finishes day, hiding buttons and leaving failed challenge to be regenerated
  finishDay = () => {
    // get todaysChallenge from state
    const failedChallenge = this.state.todaysChallenge;
    const id = failedChallenge.challengeId;

    // keep completed as 0
    failedChallenge.completed = 0;

    // Set accepted back to 0
    failedChallenge.accepted = 0;

    // update state to end of day so button disappears on click
    // Put request so accepted = 0 will update database

    axios.put(`https://wqsn40ohub.execute-api.eu-west-2.amazonaws.com/dev/challenge/${id}`, failedChallenge)
      .then(response => {
        this.setState({
          isEndOfDay: true
        });
        console.log(failedChallenge);
      })
      .catch(error => {
        //handle error
        console.error(error);
        console.log(failedChallenge)
      });
  }


  changeStyles = () => {
    if (this.state.stylePath === "styles.css") {
      this.setState({
        stylePath: "styleFerns.css"
      });
    } else if (this.state.stylePath === "styleFerns.css") {
      this.setState({
        stylePath: "styleAccessibility.css"
      });
    } else if (this.state.stylePath === "styleAccessibility.css") {
      this.setState({
        stylePath: "styles.css"
      });
    }

    console.log(this.state.stylePath)
  }


  render() {
    return (
      <div className="container-fluid">
        {/* Stylesheet needs to be here so it can update from state*/}
        <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/' + this.state.stylePath} />
        <Counter
          treeCounter={this.state.completedChallenges.length}
        />
        <Header />
        <Main
          todaysChallenge={this.state.todaysChallenge}
          newChallengeFunc={this.newChallenge}
          challengeAcceptedFunc={this.challengeAccepted}
          challengeCompletedFunc={this.challengeCompleted}
          isAccepted={this.state.isAccepted}
          isEndOfDay={this.state.isEndOfDay}
          successfulDay={this.state.successfulDay}
          finishDayFunc={this.finishDay}
          counter={this.state.completedChallenges.length}
        />
        <MobileTip
          todaysChallengeTip={this.state.todaysChallenge.tips}
        />
        <Footer 
          changeThemes={this.changeStyles}
        />
      </div>
    );
  }
}

export default App;
