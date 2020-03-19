import React from 'react';


class Counter extends React.Component {


    // treesGrown = () => {
    //     let achievedNumber = this.state.completedChallenges.length;
    //     let trees = (achievedNumber / 3);
    //     return trees;
    //   }

    render() {
        
        return (
            <div className="row">
                <div className="col-12 counter">
            Trees Planted: {Math.floor(this.props.treeCounter / 21)}
                </div>
            </div>
        );
    }
}

export default Counter;