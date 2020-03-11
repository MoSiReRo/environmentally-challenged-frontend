import React from 'react';
import TodayDate from './TodayDate';


class Header extends React.Component {



    render() {
        return (
            <div className="row">
         <div className="col-12 col-md-9 title">
            <h1>Environmentally <br />
               Challenged</h1>
         </div>
         
         <TodayDate getDateFunc={this.props.getDateFunc}/>
      </div>
        );
    }
}

export default Header;