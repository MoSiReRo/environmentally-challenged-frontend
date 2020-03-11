import React from 'react';

class Buttons extends React.Component {

    // newChallenge = () => {
    //     this.props.newChallengeFunc(this.props.newChallenge);
    // }

    // challengeAccepted = ()=> {
    //     this.props.challengeAcceptedFunc(this.props.challengeAccepted);
    // }

    render() {
        const {newChallengeFunc, challengeAcceptedFunc, isAccepted, finishDayFunc} = this.props
        return (
            <div className="row">
               <div className="col-6 acceptButton">
                  <input type="button" className="btn btn-primary btn-sm" value={isAccepted ? "I did it!" : "Accept"} onClick={isAccepted ? finishDayFunc : challengeAcceptedFunc}/>
               </div>
               <div className="col-6 tryAnother">
               <input type="button" className="btn btn-primary btn-sm" value={isAccepted ? "Try another time" : "Try Another"} onClick={isAccepted ? finishDayFunc : newChallengeFunc}/>
               </div>
            </div>
        )
    }
}

export default Buttons;


