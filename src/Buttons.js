import React from 'react';

class Buttons extends React.Component {

    render() {
        return (
            <div className="row">
               <div className="col-6 acceptButton orange">
                  <input type="button" className="btn btn-primary btn-sm" value="Accept"/>
               </div>
               <div className="col-6 tryAnother pink">
               <input type="button" className="btn btn-primary btn-sm" value="Try Another"/>
               </div>
            </div>
        )
    }
}

export default Buttons;


