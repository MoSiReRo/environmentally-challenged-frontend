import React from 'react';
import Title from './Title';
import TodayDate from './TodayDate';


class Header extends React.Component {



    render() {
        return (
            <div className="row">
         <Title />
         <div className="col-md-6 orange d-none d-md-block">
            [EMPTY]
         </div>
         <TodayDate getDateFunc={this.props.getDateFunc}/>
      </div>
        );
    }
}

export default Header;