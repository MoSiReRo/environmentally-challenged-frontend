import React from 'react';


class Counter extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12 counter">
            Completed: {this.props.counter}
                </div>
            </div>
        );
    }
}

export default Counter;