import React from 'react';

class Buttons extends React.Component {

    // newChallenge = () => {
    //     this.props.newChallengeFunc(this.props.newChallenge);
    // }

    // challengeAccepted = () => {
    //     this.props.challengeAcceptedFunc(this.props.challengeAccepted);
    // }

    render() {
        const { newChallengeFunc, challengeAcceptedFunc, isAccepted, challengeCompletedFunc, finishDayFunc, isEndOfDay } = this.props
        return (
            <div className="row">
                <div className="col-6 leftButtonBox">
                    {!isEndOfDay &&
                        <input type="button"
                            className="btn accept"
                            value={isAccepted ? "I did it!" : "Accept"}
                            onClick={isAccepted ? challengeCompletedFunc : challengeAcceptedFunc}
                        />
                    }
                </div>
                <div className="col-6 rightButtonBox">
                    {!isEndOfDay &&
                        <input type="button"
                            className="btn tryAnother"
                            value={isAccepted ? " Try another time" : "Try Another"}
                            onClick={isAccepted ? finishDayFunc : newChallengeFunc}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Buttons;


