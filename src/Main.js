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
               <div className="col-12 graph challenge">
                  <Graph
                     counter={this.props.counter} />
                  <Challenge
                     todaysChallenge={this.props.todaysChallenge}
                     newChallengeFunc={this.props.newChallengeFunc}
                     isEndOfDay={this.props.isEndOfDay}
                     successfulDay={this.props.successfulDay}
                  />
               </div>
            </div>
            <div className="row">
               <div className="col-12 boxForButtons"> 
                  <Buttons
                     newChallengeFunc={this.props.newChallengeFunc}
                     challengeAcceptedFunc={this.props.challengeAcceptedFunc}
                     challengeCompletedFunc={this.props.challengeCompletedFunc}
                     isAccepted={this.props.isAccepted}
                     isEndOfDay={this.props.isEndOfDay}
                     successfulDay={this.props.successfulDay}
                     finishDayFunc={this.props.finishDayFunc}
                  />
               </div>
               <TipLarge
                  todaysChallengeTip={this.props.todaysChallenge.tips}
               />

            </div>
         </div>
      );
   }
}

export default Main;