import React from 'react';


class TipLarge extends React.Component {

    render() {
        return (
            <div className="col-12 col-md-3 tipHint green  d-none d-md-block">
                {this.props.todaysChallengeTip}
            </div>
        );
    }
}

export default TipLarge;