import React from 'react';


class Challenge extends React.Component {

    render() {
        return (
            <div>
                Today's Challenge: 
                {this.props.newChallenge}
            </div>
        )
        
    }
}

export default Challenge;




