import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';


class Graph extends React.Component {

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




