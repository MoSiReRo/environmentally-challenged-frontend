import React from 'react';


class Challenge extends React.Component {

    render() {

        const dayEnd = this.props.isEndOfDay;
        const successfulDay = this.props.successfulDay;
        let message;

        if (dayEnd && successfulDay) {
            message = "Well done! See you tomorrow!";
        } else if (dayEnd && successfulDay === false) {
            message = "Try again tomorrow - see you then!"
        } else {
            message = `Today's Challenge: \n${this.props.todaysChallenge.challengeDesc}`;
        }

        return (
            <div>
                <p>{message}</p>
            </div>
        )
        
    }
}

export default Challenge;




