import React from 'react';
import moment from 'moment';

class TodayDate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          currentDate: new Date(),
          markedDate: moment(new Date()).format("DD-MM_YYYY")
        };
      }

    render() {

        const day = moment().format("dddd");
        const date = moment().format("D MMMM YYYY h:mm a");
        return (
            <div className="col-6 col-md-3 dateTime">
            {day} {date}
         </div>
        );
    }
}

export default TodayDate;




