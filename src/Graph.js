import React from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Graph extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       CircularProgressbar
    //     };
    //   }

    // Use props.minValue and props.maxValue to specify a range other than 0-100.

    render() {

        const value = 0.25;

        return (
            <div>
                <CircularProgressbar 
                value={value} 
                maxValue={90} 
                text={`${value * 100}%`} 
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: 'red',
                    textColor: 'blue',
                    trailColor: 'green',
                    backgroundColor: 'pink',
                })}
                    />; 
            </div>
        )
    }
}

export default Graph;




