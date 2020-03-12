import React from 'react';
import { CircularProgressbarWithChildren} from 'react-circular-progressbar';


class Graph extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       CircularProgressbar
    //     };
    //   }

    // Use props.minValue and props.maxValue to specify a range other than 0-100.

    render() {

        const value = this.props.counter

        return (
            <div>
                <CircularProgressbarWithChildren value={value} 
                maxValue={21} 
                text={`Completed: ${value}`} > 

                </CircularProgressbarWithChildren>  
            </div>
        )
    }
}

export default Graph;




