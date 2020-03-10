import React from 'react';

class Buttons extends React.Component {

    newChallenge = () => {
        this.props.newChallengeFunc(this.props.newChallenge);
    }

    render() {
        return (
            <div className="row">
               <div className="col-6 acceptButton orange">
                  <input type="button" className="btn btn-primary btn-sm" value="Accept"/>
               </div>
               <div className="col-6 tryAnother pink">
               <input type="button" className="btn btn-primary btn-sm" value="Try Another" onClick={this.newChallenge}/>
               </div>
            </div>
        )
    }
}

export default Buttons;


