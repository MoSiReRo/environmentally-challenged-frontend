import React from 'react';


class Challenge extends React.Component {

    render() {

        const dayEnd = this.props.isEndOfDay;
        let message;

        if (dayEnd) {
            message = "See you tomorrow!";
        } else {
            message = `Today's Challenge:
            ${this.props.todaysChallenge.challengeDesc}`;
        }

        return (
            <div>
                <p>{message}</p>
            </div>
        )
        
    }
}

export default Challenge;




