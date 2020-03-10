import React from 'react';


class Challenge extends React.Component {

    render() {
        return (
            <div>
                Today's Challenge: <br />
                {this.props.todaysChallenge.challengeDesc}
            </div>
        )
        
    }
}

export default Challenge;




