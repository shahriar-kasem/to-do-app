import React from 'react';

const TaskList = ({task, index}) => {
    const {name, description} = task;
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{description}</td>
        <td><button className='btn btn-xs'>Complete</button></td>
        <td><button className='btn btn-xs'>Delete</button></td>
      </tr>
    );
};

export default TaskList;