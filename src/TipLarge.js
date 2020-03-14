import React from 'react';


class TipLarge extends React.Component {

    render() {
        return (
            <div className="col-12 tipHint d-none d-md-block">
                {this.props.todaysChallengeTip}
            </div>
        );
    }
}

export default TipLarge;