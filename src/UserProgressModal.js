import React from 'react';

class UserProgressModal extends React.Component {
    render() {
        const completedChallengeCount = this.props.completedChallenges.length;


        let emoji;
        if (this.props.stylePath === "styles.css") {
            emoji = "⭐";
        } else if (this.props.stylePath === "styleFerns.css") {
            emoji = "🌿"
        } else {
            emoji = "☆";
        } 
        const completedChallenges = this.props.completedChallenges.map((challenge, key) =>
            <p key={challenge.challengeId}>{emoji} {challenge.challengeDesc} {emoji}</p>
        );


        // Add in conditional rendering based on # of tasks completed
        // 0 tasks = You haven't completed any tasks yet
        // 1-5 = Great start, etc.
        let encouragementText;

        if (completedChallengeCount === 0) {
            encouragementText = `You haven't completed any challenges yet. \nWhy not give it a go? Helping to save the world is easier than you think!`;
        } else if (completedChallengeCount === 1) {
            encouragementText = `You've completed 1 challenge so far. \nThat's a great start, why not try a few more?`;
        } else if (completedChallengeCount > 1 && completedChallengeCount < 7) {
            encouragementText = `You've completed ${completedChallengeCount} challenges so far. \nThat's a great start, why not try a few more?`;
        } else if (completedChallengeCount >= 7 && completedChallengeCount < 21) {
            encouragementText = `You've completed ${completedChallengeCount} challenges so far. \nWow, great job! Keep up all the great work.`
        } else if (completedChallengeCount >= 21) {
            encouragementText = `You've completed ${completedChallengeCount} challenges so far. \nIncredible! That means we've planted ${Math.floor(completedChallengeCount/21)} tree(s) thanks to you.\nYour actions are making a huge difference to the world.`
        } else {
            encouragementText = `You've completed ${completedChallengeCount} challenges so far.`;
        } 


        return (
            <div>
                    <button className="close" type="button" onClick={this.props.closeModalFunc}>
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">Close</span>
                    </button>

                <p className="ModalTitle">Your Progress</p>
                <p className="ModalText">{ encouragementText }</p>
                <p className="ModalText">
                    
                    {completedChallenges}

                    <button className="btn closeModalButton" onClick={this.props.closeModalFunc}>Close</button>
                </p>
            </div>
        )

    }
}

export default UserProgressModal;




