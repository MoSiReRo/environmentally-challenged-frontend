import React from 'react';
import TodayDate from './TodayDate';


class Header extends React.Component {



    render() {
        return (
            <div className="row">
         <div className="col-6 col-md-3 title red">
            Title: Environmentally Challenged
         </div>
         <div className="col-md-6 orange d-none d-md-block">
            [EMPTY]
         </div>
         <TodayDate getDateFunc={this.props.getDateFunc}/>
      </div>
        );
    }
}

export default Header;