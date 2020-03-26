import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';


class Graph extends React.Component {

    render() {

        const value = this.props.counter % 21
        
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


// JAMES'S SUGGESTION
// import React from 'react';
// import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
// class Graph extends React.Component {
//     render() {
//         const value = this.props.counter
//         const tasksPerTree = 21;
//         // Need to work out how many tasks we've completed in this block 
//         let blocksOfTasksCompleted = Math.floor(value / tasksPerTree);
//         // Then we take the difference between the completed tasks in block and completed tasks
//         let tasksRemaining = value - (blocksOfTasksCompleted * tasksPerTree);
//         return (
//             <div>
//                 <CircularProgressbarWithChildren value={tasksRemaining}
//                     maxValue={tasksPerTree}
//                     text={`Completed: ${tasksRemaining}`} >
//                 </CircularProgressbarWithChildren>
//             </div>
//         )
//     }
// }
// export default Graph;
