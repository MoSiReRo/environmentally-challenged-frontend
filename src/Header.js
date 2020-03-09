import React from 'react';
import Title from './Title';
import Date from './Date';


class Header extends React.Component {

    render() {
        return (
            <div className="row">
         <Title />
         <div className="col-md-6 orange d-none d-md-block">
            [EMPTY]
         </div>
         <Date />
      </div>
        );
    }
}

export default Header;