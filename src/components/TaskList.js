import React from 'react';

const TaskList = ({task, index, handleComplete, handleDelete}) => {
    const {_id, name, description} = task;
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{description}</td>
        <td><button onClick={() => handleComplete(_id)} className='btn btn-xs'>Complete</button></td>
        <td><button onClick={() => handleDelete(_id)} className='btn btn-xs'>Delete</button></td>
      </tr>
    );
};

export default TaskList;