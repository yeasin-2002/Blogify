import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

import { Input } from '@/components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
interface Props extends React.ComponentProps<'div'> {}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register = ({ ...rest }: Props) => {
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
        <div className="mx-auto mt-12 w-full rounded-md bg-[#030317] p-8 md:w-1/2">
          <h2 className="mb-6 text-2xl font-bold">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register('firstName', {
                required: 'First-Name is required',
              })}
              errorMsg={errors.firstName?.message}
              labelName="First Name"
            />

            <Input
              register={register('lastName', {
                required: 'Last-Name is required',
              })}
              errorMsg={errors.lastName?.message}
              labelName="Last Name"
            />

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
                Create Account
              </button>
            </div>
            <p className="text-center">
              Already have account?{' '}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
