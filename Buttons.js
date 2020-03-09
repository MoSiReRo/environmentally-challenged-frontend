import React from 'react';

class Buttons extends React.Component {

    render() {
        return (
<div className="row">
               <div className="col-6 acceptButton orange">
                  Accept button
               </div>
               <div className="col-6 tryAnother pink">
                  Try Another button
               </div>
            </div>
        );
}
}

export default Buttons;