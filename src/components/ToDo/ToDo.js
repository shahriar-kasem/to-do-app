import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useNotes from '../../hooks/useNotes';
import TaskList from '../TaskList';

const ToDo = () => {
    const [ToDo, setToDo] = useState([]);
    const {notes, refetch, isLoading} = useNotes();
    console.log(notes)

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const name = data.name;
        const description = data.name;
        const newTask = {name, description};
        console.log(newTask)
        e.target.reset()

        // fetch('http://localhost:5000/add',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(newTask),
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     const newTaskList = [...task, newTask];
        //     setTask(newTaskList)
        //     e.target.reset();
        // })
    };

    const handleComplete = () => {
        
    }
    const handleDelete = () => {

    }

    return (
        <section>
            <h1 className='text-red-600 text-2xl text-center my-5'>Welcome to To Do app</h1>
            <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 p-1 my-1' placeholder='Name' {...register("name")} required />
                <input className='border-2 p-1 my-1' placeholder='Description' {...register("description")} required />              
                <input className='border py-1 px-3 bg-rose-400 text-white mt-2' type="submit" value='Add task' />
            </form>
            <div>
                <h1>Task List</h1>
                <div className="overflow-x-auto">
  <table className="table w-3/4 lg mx-auto">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Description</th>
        <th>Complete</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

{   notes && 
    notes.map((t,index) =><TaskList 
    key={t._id}
    index={index}
    task={t}
    ></TaskList>)
}

    </tbody>
  </table>
</div>
            </div>
        </section>
    );
};

export default ToDo;