import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data, e) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const info = {name, email, password};
    console.log(info)
    e.target.reset()
  };

  return (
    <section className='text-center mt-5'>
      <h1 className='text-lg text-info font-semibold'><i>Please login to continue</i></h1>
     <div>
     <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Your
              email</span>
          </label>
          <input type="email" placeholder="Email" autoComplete='off' class="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: 'Email is required'
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Please enter a valid email'
              }
            })}
          />
          <label class="label">
            {
              errors?.email?.type === 'required' && <p className='text-red-500'><small>{errors.email.message}</small></p>
            }
            {
              errors?.email?.type === 'pattern' && <p className='text-red-500'><small>{errors.email.message}</small></p>
            }
          </label>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Your
              password</span>
          </label>
          <input type="password" placeholder="Password" autoComplete='off' class="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: {
                value: true,
                message: 'Password is required'
              },
              minLength: {
                value: 8,
                message: 'Your password must contain 8 character'
              }
            })}
          />
          <label class="label">
            {
              errors?.password?.type === 'required' && <p className='text-red-500'><small>{errors.password.message}</small></p>
            }
            {
              errors?.password?.type === 'minLength' && <p className='text-red-500'><small>{errors.password.message}</small></p>
            }
          </label>
        </div>
        <button className='btn max-w-xs w-full btn-outline' type="submit">Login</button>
      </form>
     </div>
      <div>
      <p><small>Dont have an account? <Link className='text-info' to='/signup'>Create account</Link></small></p>
      </div>
    </section>
  );
};

export default Login;