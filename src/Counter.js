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
            Trees <br /> Planted: <br /> <span style={{fontWeight: '500', fontSize: '2.5em', lineHeight: '1.1'}}>{Math.floor(this.props.treeCounter / 21)}</span>
                </div>
            </div>
        );
    }
}

export default Counter;