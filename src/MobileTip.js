import React from 'react';

class MobileTip extends React.Component {

render() {
    return (
<div className="row">
         <div className="col-12 col-md-3 tipHintMobile d-lg-none d-md-none">
            {this.props.todaysChallengeTip}
         </div>
      </div>
    )
}
}

export default MobileTip;