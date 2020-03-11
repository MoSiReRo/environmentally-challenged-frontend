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
            <div className="col-3 grey d-none d-md-block">
               [EMPTY]
            </div>
            <div className="col-12 col-md-6 graph challenge yellow">
               <Graph />
               <Challenge
               todaysChallenge={this.props.todaysChallenge}
               newChallengeFunc={this.props.newChallengeFunc}
               />
            </div>
            <div className="col-3 grey d-none d-md-block">
               [EMPTY]
            </div>
         </div>
         <div className="row">
               <TipLarge />
            <div className="col-12 col-md-6 boxForButtons purple">
               <Buttons 
               newChallengeFunc={this.props.newChallengeFunc}
               challengeAcceptedFunc={this.props.challengeAcceptedFunc}
               />
            </div>
            <div className="col-3 red d-none d-md-block">
               [empty]
            </div>
         </div>
      </div>
        );
    }
}

export default Main;