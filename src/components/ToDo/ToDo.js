import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useNotes from '../../hooks/useNotes';
import TaskList from '../TaskList';

const ToDo = () => {
    const { notes, refetch } = useNotes();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const name = data.name;
        const description = data.description;
        const newTask = { name, description };
        e.target.reset()

        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    refetch()
                    toast.success('Task added successfully')
                    e.target.reset();
                }
                else {
                    toast.error('Something went wrong!')
                }
            })
    };

    const handleComplete = (id) => {
        const complete = 'Completed';

        fetch(`http://localhost:5000/update`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ complete, id }),
        })
            .then(res => {
                res.json()
                if (res.status === 200) {
                    refetch()
                    toast.success('Task completed successfully')
                }
                else {
                    refetch()
                    toast.error('Something went wrong!')
                }
            })
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/note/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){
                    refetch()
                    toast.success('Task deleted successfully')
                }
                else{
                    refetch()
                    toast.error('Something went wrong!')
                }
            })
    }

    return (
        <section>
            <h1 className='text-info text-2xl text-center my-5 font-bold'><i>Welcome to To Do app</i></h1>
            <form className='flex flex-col justify-center items-center mx-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 p-2 my-1 w-full md:w-1/2 rounded-lg' placeholder='Name' {...register("name")} required />
                <textarea rows={2} className='border-2 p-2 my-1 w-full md:w-1/2 rounded-lg' placeholder='Description' {...register("description")} required />
                <input className='btn btn-info btn-outline border py-1 px-3 text-white mt-2' type="submit" value='Add task' />
            </form>
            <div className='my-5'>
                <h1 className='text-center font-bold text-3xl my-1 text-success'>Your task list are below</h1>
                <div className="overflow-x-auto">
                    {
                        (notes.length >= 1) && 
                        <table className="table w-3/4 lg mx-auto">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th className='text-center'>Complete</th>
                                <th className='text-center'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {notes &&
                                notes.map((t, index) => <TaskList
                                    key={t._id}
                                    index={index}
                                    task={t}
                                    handleComplete={handleComplete}
                                    handleDelete={handleDelete}
                                ></TaskList>)
                            }

                        </tbody>
                    </table>
                    }
                    {
                        (notes.length === 0) && 
                        <p className='my-3 text-lg text-red-500 font-semibold text-center'>Please add something to see here</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default ToDo;