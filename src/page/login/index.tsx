import { Input } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
interface Props extends React.ComponentProps<'div'> {}

interface FormValues {
  email: string;
  password: string;
}

export const LogIn = ({ ...rest }: Props) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <main {...rest}>
      <section className="container">
        {/* Login Form into a box center of the page */}
        <div className="mx-auto mt-12 w-full rounded-md bg-[#030317] p-8 md:w-1/2">
          <h2 className="mb-6 text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
              })}
              errorMsg={errors.email?.message}
              labelName="Email"
            />
            <Input
              register={register('password', {
                required: 'password is required',
                minLength: { value: 8, message: 'Minimum 8 characters' },
              })}
              errorMsg={errors.password?.message}
              labelName="Password"
            />
            <div className="mb-6">
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 p-3 text-white transition-all duration-200 hover:bg-indigo-700"
              >
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{' '}
              <Link to="/register" className="text-indigo-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
