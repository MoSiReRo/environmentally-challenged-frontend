import React from 'react';

class UserProgressModal extends React.Component {
    render() {
        const completedChallengeCount = this.props.completedChallengeCount
        console.log(completedChallengeCount)

        // Add in conditional rendering based on # of tasks completed
        // 0 tasks = You haven't completed any tasks yet
        // 1-5 = Great start, etc.

        return (
            <div>
                <p className="ModalTitle">Your Progress</p>
                <p className="ModalText">Wow, great job! You've completed { completedChallengeCount } challenges so far.</p>
                <p className="ModalText">
                    **RENDER A LIST OF COMPLETED CHALLENGES HERE!**
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br />
                    Test
                    <br/>
                    <button className="btn closeModalButton" onClick={this.props.closeModalFunc}>Close Modal</button>
                </p>
            </div>
        )
        
    }
}

export default UserProgressModal;




