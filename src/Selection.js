import React from 'react';
import TipLarge from './TipLarge';
import Buttons from './Buttons';


class Selection extends React.Component {

render() {
    return (
<div className="row">

            <TipLarge />
         
         <div className="col-12 col-md-6 boxForButtons purple">
            <Buttons />
         </div>
         <div className="col-3 red d-none d-md-block">
            [empty]
         </div>
      </div>
    );
}
}

export default Selection;