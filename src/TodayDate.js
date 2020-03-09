import React from 'react';


class TodayDate extends React.Component {

    render() {
        return (
            <div className="col-6 col-md-3 dateTime purple">
            {this.props.getDateFunc}
         </div>
        );
    }
}

export default TodayDate;




