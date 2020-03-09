import React from 'react';
import Graph from './Graph';
import Challenge from './Challenge';


class Main extends React.Component {

    render() {
        return (
            <div className="row">
         
         <div className="col-3 grey d-none d-md-block">
            [EMPTY]
         </div>
         
         <div className="col-12 col-md-6 graph challenge yellow">
            <Graph />
            <Challenge />
         </div>
         
         <div className="col-3 grey d-none d-md-block">
            [EMPTY]
         </div>
      </div>
        );
    }
}

export default Main;