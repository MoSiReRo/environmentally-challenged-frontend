import React from 'react';
import Graph from './Graph';
import Challenge from './Challenge';
import TipLarge from './TipLarge';
import Buttons from './Buttons';


class Main extends React.Component {

   render() {
      return (
         <div>
            <div className="row">
               <div className="col-12 col-md-12 graph challenge">
                  <Graph />
                  <Challenge
                     todaysChallenge={this.props.todaysChallenge}
                     newChallengeFunc={this.props.newChallengeFunc}
                  />
               </div>
            </div>
            <div className="row">
               <TipLarge
                  todaysChallengeTip={this.props.todaysChallenge.tips}
               />
               <div className="col-12 col-md-6 boxForButtons">
                  <Buttons
                     newChallengeFunc={this.props.newChallengeFunc}
                     challengeAcceptedFunc={this.props.challengeAcceptedFunc}
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default Main;