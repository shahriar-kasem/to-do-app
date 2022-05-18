import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ToDo = () => {
    const [ToDo, setToDo] = useState([]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const name = data.name;
        const description = data.name;
        const task = {name, description};

        fetch('http://localhost:5000/add',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    };

    return (
        <section>
            <h1 className='text-red-600 text-2xl text-center my-5'>Welcome to To Do app</h1>
            <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 p-1 my-1' placeholder='Name' {...register("name")} required />
                <input className='border-2 p-1 my-1' placeholder='Description' {...register("description")} required />
               
                <input className='border py-1 px-3 bg-rose-400 text-white mt-2' type="submit" value='Add task' />
            </form>
        </section>
    );
};

export default ToDo;